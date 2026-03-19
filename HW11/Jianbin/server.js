import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes.js';
import testRoutes from './routes/testRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import reportRoutes from './routes/reportRoutes.js';
import requestId from './middleware/requestId.js';
import requestLogger from './middleware/requestLogger.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(requestId);
app.use(requestLogger);

app.get('/', (req, res) => {
  res.json({ message: 'HW11 backend is running', requestId: req.requestId });
});

app.use('/tasks', taskRoutes);
app.use('/', testRoutes);
app.use('/projects', projectRoutes);
app.use('/reports', reportRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: {
      message: 'Route not found',
      requestId: req.requestId
    }
  });
});

app.use(errorHandler);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });
