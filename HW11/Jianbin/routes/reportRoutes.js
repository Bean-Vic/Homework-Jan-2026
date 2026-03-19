import express from 'express';
import mongoose from 'mongoose';
import Task from '../models/Task.js';
import asyncHandler from '../utils/asyncHandler.js';

const router = express.Router();

function buildDateMatch(startDate, endDate) {
  const match = { isDeleted: false };
  if (startDate || endDate) {
    match.createdAt = {};
    if (startDate) match.createdAt.$gte = new Date(startDate);
    if (endDate) match.createdAt.$lte = new Date(endDate);
  }
  return match;
}

router.get(
  '/tasks/summary',
  asyncHandler(async (req, res) => {
    const { startDate, endDate } = req.query;
    const pipeline = [
      { $match: buildDateMatch(startDate, endDate) },
      { $group: { _id: '$status', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $project: { _id: 0, status: '$_id', count: 1 } }
    ];

    const byStatus = await Task.aggregate(pipeline);
    const total = byStatus.reduce((sum, item) => sum + item.count, 0);

    res.json({ success: true, total, byStatus });
  })
);

router.get(
  '/tasks/by-project',
  asyncHandler(async (req, res) => {
    const { startDate, endDate } = req.query;
    const pipeline = [
      { $match: buildDateMatch(startDate, endDate) },
      { $lookup: { from: 'projects', localField: 'project', foreignField: '_id', as: 'project' } },
      { $unwind: { path: '$project', preserveNullAndEmptyArrays: true } },
      { $group: { _id: '$project.name', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $project: { _id: 0, project: { $ifNull: ['$_id', 'Unassigned'] }, count: 1 } }
    ];

    const result = await Task.aggregate(pipeline);
    res.json({ success: true, data: result });
  })
);

router.get(
  '/tasks/by-assignee',
  asyncHandler(async (req, res) => {
    const { startDate, endDate } = req.query;
    const pipeline = [
      { $match: buildDateMatch(startDate, endDate) },
      { $lookup: { from: 'users', localField: 'assignee', foreignField: '_id', as: 'assignee' } },
      { $unwind: { path: '$assignee', preserveNullAndEmptyArrays: true } },
      { $group: { _id: '$assignee.name', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 20 },
      { $project: { _id: 0, assignee: { $ifNull: ['$_id', 'Unassigned'] }, count: 1 } }
    ];

    const result = await Task.aggregate(pipeline);
    res.json({ success: true, data: result });
  })
);

export default router;
