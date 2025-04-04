import mongoose from 'mongoose';

const callSchema = new mongoose.Schema({
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  customer: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  audioUrl: {
    type: String,
    required: true
  },
  transcription: {
    type: String,
    required: true
  },
  sentimentAnalysis: [{
    timestamp: Number,
    sentiment: String,
    confidence: Number
  }],
  language: {
    type: String,
    enum: ['en', 'hi'],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Call', callSchema);
