import express from 'express';
import { z } from 'zod';
import { Application } from '../models/Application.js';
import { authenticateAdmin } from '../middleware/auth.js';

const router = express.Router();

const applicationSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(10).max(20),
  statement: z.string().min(50).max(1000)
});

// Submit application
router.post('/', async (req, res) => {
  try {
    const validatedData = applicationSchema.parse(req.body);
    const application = new Application(validatedData);
    await application.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.errors });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }
});

// Admin routes
router.get('/', authenticateAdmin, async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.patch('/:id/status', authenticateAdmin, async (req, res) => {
  try {
    const { status } = req.body;
    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(application);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export const applicationRouter = router;