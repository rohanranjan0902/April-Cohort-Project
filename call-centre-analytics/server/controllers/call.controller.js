import Call from '../models/Call.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

// @desc    Get all calls
// @route   GET /api/calls
export const getCalls = asyncHandler(async (req, res) => {
  const calls = await Call.find({ agent: req.user.id })
    .sort({ createdAt: -1 })
    .populate('agent', 'name email');
  res.status(200).json(calls);
});

// @desc    Get single call details
// @route   GET /api/calls/:id
export const getCallDetails = asyncHandler(async (req, res) => {
  const call = await Call.findById(req.params.id)
    .populate('agent', 'name email');
  
  if (!call) {
    res.status(404);
    throw new Error('Call not found');
  }

  res.status(200).json(call);
});

// @desc    Add agent notes to call
// @route   PATCH /api/calls/:id/notes
export const addAgentNotes = asyncHandler(async (req, res) => {
  const { notes } = req.body;
  
  const call = await Call.findByIdAndUpdate(
    req.params.id,
    { $set: { agentNotes: notes } },
    { new: true }
  );

  res.status(200).json(call);
});
