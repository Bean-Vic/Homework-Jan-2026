import mongoose from 'mongoose';

export default function errorHandler(err, req, res, next) {
  console.error(`[${req.requestId}]`, err);

  if (err instanceof mongoose.Error.CastError) {
    return res.status(400).json({
      success: false,
      error: { message: 'Invalid ID format', requestId: req.requestId }
    });
  }

  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(400).json({
      success: false,
      error: {
        message: 'Validation failed',
        details: Object.values(err.errors).map((e) => e.message),
        requestId: req.requestId
      }
    });
  }

  if (err.code === 11000) {
    return res.status(409).json({
      success: false,
      error: { message: 'Duplicate value', requestId: req.requestId }
    });
  }

  res.status(err.statusCode || 500).json({
    success: false,
    error: {
      message: err.message || 'Internal server error',
      requestId: req.requestId
    }
  });
}
