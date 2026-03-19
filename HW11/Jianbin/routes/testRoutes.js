import express from 'express';
import jwt from 'jsonwebtoken';
import auth from '../middleware/auth.js';
import requireRole from '../middleware/requireRole.js';

const router = express.Router();

router.get('/token/user', (req, res) => {
  const token = jwt.sign({ id: 'u1', name: 'Demo User', role: 'user' }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

router.get('/token/admin', (req, res) => {
  const token = jwt.sign({ id: 'a1', name: 'Admin User', role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

router.get('/profile', auth, (req, res) => {
  res.json({ success: true, user: req.user, requestId: req.requestId });
});

router.get('/admin/reports', auth, requireRole('admin'), (req, res) => {
  res.json({ success: true, message: 'Sensitive admin report data', requestId: req.requestId });
});

export default router;
