import mongoose from 'mongoose';
import { MONGO_URI } from '../db.ts';
import { Quiz } from '../model/quiz.ts';

const insertQuiz = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('mongodb성공');
    const quizzes = [
      {
        id: '1',
        title: '첫 번째 퀴즈',
        description: '목표 지점까지 이동한 후 공격하세요.',
        grid: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [2, 0, 0, 0],
        ],
        hint: '첫번쨰 힌트',
        startPosition: { x: 0, y: 0 },
        goalPosition: { x: 2, y: 0 },
        goalAction: 'shoot',
        commands: [
          {
            name: 'forward',
            functionCode: "console.log('move forward');",
          },
          {
            name: 'shoot',
            functionCode: "console.log('shoot');",
          },
        ],
      },
      {
        id: '2',
        title: '두 번째 퀴즈',
        description: '목표 지점까지 이동한 후 공격하세요.',
        grid: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [2, 0, 0, 0],
        ],
        hint: '두번쨰 힌트',
        startPosition: { x: 0, y: 0 },
        goalPosition: { x: 2, y: 0 },
        goalAction: 'shoot',
        commands: [
          {
            name: 'forward',
            functionCode: "console.log('move forward');",
          },
          {
            name: 'shoot',
            functionCode: "console.log('shoot');",
          },
        ],
      },
      {
        id: '3',
        title: '세 번째 퀴즈',
        description: '목표 지점까지 이동한 후 공격하세요.',
        grid: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [2, 0, 0, 0],
        ],
        hint: '세번쨰 힌트',
        startPosition: { x: 0, y: 0 },
        goalPosition: { x: 2, y: 0 },
        goalAction: 'shoot',
        commands: [
          {
            name: 'forward',
            functionCode: "console.log('move forward');",
          },
          {
            name: 'shoot',
            functionCode: "console.log('shoot');",
          },
        ],
      },
      {
        id: '4',
        title: '네 번째 퀴즈',
        description: '목표 지점까지 이동한 후 공격하세요.',
        grid: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [2, 0, 0, 0],
        ],
        hint: '세번쨰 힌트',
        startPosition: { x: 0, y: 0 },
        goalPosition: { x: 2, y: 0 },
        goalAction: 'shoot',
        commands: [
          {
            name: 'forward',
            functionCode: "console.log('move forward');",
          },
          {
            name: 'shoot',
            functionCode: "console.log('shoot');",
          },
        ],
      },
    ];

    for (const quiz of quizzes) {
      await Quiz.findOneAndUpdate(
        { id: quiz.id },
        { $setOnInsert: quiz },
        { upsert: true, new: true }
      );
    }
    process.exit(0);
  } catch (error) {
    process.exit(1);
  }
};

insertQuiz();
