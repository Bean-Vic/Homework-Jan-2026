import express from 'express';
import Project from '../models/Project.js';
import Task from '../models/Task.js';
import User from '../models/User.js';
import asyncHandler from '../utils/asyncHandler.js';

const router = express.Router();

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const project = await Project.create(req.body);
    res.status(201).json({ success: true, data: project });
  })
);

router.post(
  '/:projectId/tasks',
  asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.projectId);
    if (!project) {
      return res.status(404).json({ success: false, error: { message: 'Project not found', requestId: req.requestId } });
    }

    if (req.body.assignee) {
      const user = await User.findById(req.body.assignee);
      if (!user) {
        return res.status(404).json({ success: false, error: { message: 'Assignee not found', requestId: req.requestId } });
      }
    }

    const task = await Task.create({ ...req.body, project: req.params.projectId });
    const populatedTask = await Task.findById(task._id).populate('project assignee');

    res.status(201).json({ success: true, data: populatedTask });
  })
);

export default router;
