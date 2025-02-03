const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  codeTemplate: { type: String, required: true },
  answer: { type: String, required: true },
  hint: { type: String },
  grid: { type: [[Number]], required: true },
  startPosition: {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
  commands: [
    {
      name: { type: String, required: true },
      functionCode: { type: String, required: true },
    },
  ],
});

export const Quiz = mongoose.model('Quiz', quizSchema);
