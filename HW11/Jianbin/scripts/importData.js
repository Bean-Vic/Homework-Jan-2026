import fs from 'fs/promises';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Task from '../models/Task.js';

dotenv.config();

const fileArg = process.argv[2];
const dryRun = process.argv.includes('--dry-run');

if (!fileArg) {
  console.error('Usage: node scripts/importData.js <tasks.json|users.json> [--dry-run]');
  process.exit(1);
}

async function main() {
  const filePath = path.resolve(fileArg);
  let raw;
  try {
    raw = await fs.readFile(filePath, 'utf-8');
  } catch (error) {
    console.error('File does not exist');
    process.exit(1);
  }

  let data;
  try {
    data = JSON.parse(raw);
    if (!Array.isArray(data)) throw new Error('Input must be an array');
  } catch (error) {
    console.error('Invalid JSON format');
    process.exit(1);
  }

  const isUsersFile = path.basename(filePath).includes('user');
  const Model = isUsersFile ? User : Task;
  const dedupeField = isUsersFile ? 'email' : 'title';

  let inserted = 0;
  let skipped = 0;
  let failed = 0;
  const failures = [];
  const uniqueMap = new Map();

  for (const record of data) {
    if (!record[dedupeField]) {
      failed++;
      failures.push({ record, reason: `Missing required field: ${dedupeField}` });
      continue;
    }

    if (uniqueMap.has(record[dedupeField])) {
      skipped++;
      continue;
    }

    uniqueMap.set(record[dedupeField], true);
  }

  const cleaned = [...uniqueMap.keys()].map((key) => data.find((item) => item[dedupeField] === key));

  if (dryRun) {
    console.log({ dryRun: true, wouldInsert: cleaned.length, skipped, failed });
    return;
  }

  await mongoose.connect(process.env.MONGODB_URI);

  try {
    const ops = [];
    for (const record of cleaned) {
      ops.push({
        updateOne: {
          filter: { [dedupeField]: record[dedupeField] },
          update: { $setOnInsert: record },
          upsert: true
        }
      });
    }

    const result = await Model.bulkWrite(ops);
    inserted = result.upsertedCount || 0;
  } catch (error) {
    failed += cleaned.length;
    failures.push({ reason: error.message });
  } finally {
    await mongoose.disconnect();
  }

  if (failures.length) {
    await fs.writeFile('failed-records.json', JSON.stringify(failures, null, 2));
  }

  console.log({ inserted, skipped, failed });
}

main();
