import express from 'express';
import {
  getCalls,
  getCallDetails,
  addAgentNotes
} from '../controllers/call.controller.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getCalls);
router.get('/:id', auth, getCallDetails);
router.patch('/:id/notes', auth, addAgentNotes);

export default router;
