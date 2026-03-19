import express from 'express';
import mongoose from 'mongoose';
import Task from '../models/Task.js';
import asyncHandler from '../utils/asyncHandler.js';

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const { status, priority, page = 1, limit = 10, sortBy = 'createdAt', keyword } = req.query;

    const filter = { isDeleted: false };
    if (status) filter.status = status;
    if (priority) filter.priority = priority;
    if (keyword) filter.title = { $regex: keyword, $options: 'i' };

    const allowedSort = ['createdAt', 'dueDate'];
    const sortField = allowedSort.includes(sortBy) ? sortBy : 'createdAt';

    const tasks = await Task.find(filter)
      .sort({ [sortField]: 1 })
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit))
      .lean();

    const total = await Task.countDocuments(filter);

    res.json({
      success: true,
      page: Number(page),
      limit: Number(limit),
      total,
      data: tasks
    });
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ success: false, error: { message: 'Invalid ID', requestId: req.requestId } });
    }

    const task = await Task.findOne({ _id: req.params.id, isDeleted: false }).populate('project assignee');

    if (!task) {
      return res.status(404).json({ success: false, error: { message: 'Task not found', requestId: req.requestId } });
    }

    res.json({ success: true, data: task });
  })
);

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ success: true, data: task });
  })
);

router.patch(
  '/:id',
  asyncHandler(async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, runValidators: true });

    if (!task || task.isDeleted) {
      return res.status(404).json({ success: false, error: { message: 'Task not found', requestId: req.requestId } });
    }

    res.json({ success: true, data: task });
  })
);

router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id);

    if (!task || task.isDeleted) {
      return res.status(404).json({ success: false, error: { message: 'Task not found', requestId: req.requestId } });
    }

    task.isDeleted = true;
    task.deletedAt = new Date();
    await task.save();

    res.json({ success: true, message: 'Task soft-deleted' });
  })
);

export default router;
