const mongoose = require('mongoose');
const Task = require('../models/Task');
const asyncHandler = require('../utils/asyncHandler');

const getTasks = asyncHandler(async (req, res) => {
  const {
    status,
    priority,
    page = 1,
    limit = 10,
    sortBy = 'createdAt',
    order = 'desc',
    keyword
  } = req.query;

  const filter = {
    isDeleted: false
  };

  if (status) {
    filter.status = status;
  }

  if (priority) {
    filter.priority = priority;
  }

  if (keyword) {
    filter.title = { $regex: keyword, $options: 'i' };
  }

  const allowedSortFields = ['createdAt', 'dueDate'];
  const sortField = allowedSortFields.includes(sortBy) ? sortBy : 'createdAt';
  const sortOrder = order === 'asc' ? 1 : -1;

  const pageNumber = Math.max(parseInt(page, 10) || 1, 1);
  const limitNumber = Math.max(parseInt(limit, 10) || 10, 1);
  const skip = (pageNumber - 1) * limitNumber;

  const [tasks, total] = await Promise.all([
    Task.find(filter)
      .sort({ [sortField]: sortOrder })
      .skip(skip)
      .limit(limitNumber),
    Task.countDocuments(filter)
  ]);

  res.status(200).json({
    success: true,
    page: pageNumber,
    limit: limitNumber,
    total,
    totalPages: Math.ceil(total / limitNumber),
    data: tasks
  });
});

// @desc    GET /tasks/:id
const getTaskById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error('Invalid task id');
    error.statusCode = 400;
    throw error;
  }

  const task = await Task.findOne({ _id: id, isDeleted: false });

  if (!task) {
    const error = new Error('Task not found');
    error.statusCode = 404;
    throw error;
  }

  res.status(200).json({
    success: true,
    data: task
  });
});

// @desc    POST /tasks
const createTask = asyncHandler(async (req, res) => {
  const { title, description, status, priority, dueDate } = req.body;

  const task = await Task.create({
    title,
    description,
    status,
    priority,
    dueDate
  });

  res.status(201).json({
    success: true,
    message: 'Task created successfully',
    data: task
  });
});

// @desc    PATCH /tasks/:id
const updateTask = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error('Invalid task id');
    error.statusCode = 400;
    throw error;
  }

  const task = await Task.findOneAndUpdate(
    { _id: id, isDeleted: false },
    { $set: req.body },
    {
      new: true,
      runValidators: true
    }
  );

  if (!task) {
    const error = new Error('Task not found');
    error.statusCode = 404;
    throw error;
  }

  res.status(200).json({
    success: true,
    message: 'Task updated successfully',
    data: task
  });
});

// @desc    DELETE /tasks/:id
// Normal delete version
const deleteTask = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error('Invalid task id');
    error.statusCode = 400;
    throw error;
  }

  const task = await Task.findOneAndDelete({ _id: id, isDeleted: false });

  if (!task) {
    const error = new Error('Task not found');
    error.statusCode = 404;
    throw error;
  }

  res.status(200).json({
    success: true,
    message: 'Task deleted successfully'
  });
});

// Bonus: soft delete version
const softDeleteTask = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error('Invalid task id');
    error.statusCode = 400;
    throw error;
  }

  const task = await Task.findOneAndUpdate(
    { _id: id, isDeleted: false },
    { $set: { isDeleted: true } },
    { new: true }
  );

  if (!task) {
    const error = new Error('Task not found');
    error.statusCode = 404;
    throw error;
  }

  res.status(200).json({
    success: true,
    message: 'Task soft deleted successfully'
  });
});

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  softDeleteTask
};
