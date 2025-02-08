import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    order: { type: Number, required: true },
    grid: { type: [[Number]], required: true },
    hint: { type: String },
    startPosition: {
      x: { type: Number, required: true },
      y: { type: Number, required: true },
    },
    goalPosition: {
      x: { type: Number, required: true },
      y: { type: Number, required: true },
    },
    goalAction: { type: String, required: true },
    commands: [
      {
        name: { type: String, required: true },
        functionCode: { type: String, required: true },
        _id: false,
      },
    ],
  },
  { versionKey: false }
);

export const Quiz = mongoose.model('Quiz', quizSchema);
