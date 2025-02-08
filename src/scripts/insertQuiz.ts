import mongoose from 'mongoose';
import { MONGO_URI } from '../db.ts';
import { Quiz } from '../model/quiz.ts';
import { v4 } from 'uuid';

const insertQuiz = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('mongodb성공');
    const quizzes = [
      {
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
        goalPosition: { x: 0, y: 3 },
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
        title: '두 번째 퀴즈',
        description: '목표 지점까지 이동한 후 공격하세요.',
        grid: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 2],
        ],
        hint: '두번쨰 힌트 방향을 바꿀수 있어요~',
        startPosition: { x: 0, y: 0 },
        goalPosition: { x: 3, y: 3 },
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
          {
            name: 'turnRight',
            functionCode: "console.log('turnRight');",
          },
        ],
      },
      {
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
        title: '네 번째 퀴즈',
        description: '목표 지점까지 이동한 후 공격하세요.',
        grid: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [2, 0, 0, 0],
        ],
        hint: '네번쨰 힌트',
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
    const quizUUID = quizzes.map(() => v4());
    const quizzesLinkedList = quizzes.map((quiz, index) => ({
      ...quiz,
      id: quizUUID[index],
      isFirst: index === 0,
      prevId: index === 0 ? null : quizUUID[index - 1],
      nextId: index === quizUUID.length - 1 ? null : quizUUID[index + 1],
    }));
    await Quiz.insertMany(quizzesLinkedList);
    process.exit(0);
  } catch (error) {
    console.error('오류 발생:', error);
    process.exit(1);
  }
};
insertQuiz();
