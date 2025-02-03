const mongoose = require('mongoose');
const { MONGO_URI } = require('../db');
const { Quiz } = require('../model/quiz');

const insertQuiz = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('mongodb성공');
    const quizzes = [
      {
        id: 1,
        title: '첫 번째 퀴즈',
        description: '가데이터로 제공되는 첫 번째 퀴즈 설명입니다.',
        codeTemplate:
          "function example() {\n  console.log('Hello, world!');\n}",
        answer: 'Hello, world!',
        hint: '코드를 작성하고 결과를 확인하세요.',
        grid: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [2, 0, 0, 0],
        ],
        startPosition: { x: 0, y: 0 },
        commands: [
          {
            name: 'forward',
            function: () => {
              console.log('move forward');
            },
          },
          {
            name: 'shoot',
            function: () => {
              console.log('shoot');
            },
          },
        ],
      },
      {
        id: 2,
        title: '조건문과 반복문',
        description: '조건문과 반복문을 사용하여 로직을 구현해봅시다.',
        codeTemplate: '두번째 codeTemplate',
        answer: '2번 정답',
        hint: '2번 힌트',
        grid: [
          [0, 0, 2, 0],
          [0, 1, 2, 0],
          [0, 0, 2, 0],
          [0, 0, 2, 0],
        ],
        startPosition: { x: 0, y: 0 },
        commands: [
          {
            name: 'forward',
            function: () => {
              console.log('move forward');
            },
          },
          {
            name: 'shoot',
            function: () => {
              console.log('shoot');
            },
          },
        ],
      },
      {
        id: 3,
        title: '함수와 스코프',
        description: 'JavaScript 함수와 스코프에 대해 알아봅시다.',
        codeTemplate: '세번째 codeTemplate',
        answer: '3번 정답',
        hint: '3번힌트',
        grid: [
          [0, 0, 0, 3],
          [0, 1, 0, 3],
          [0, 0, 2, 0],
          [0, 0, 0, 0],
        ],
        startPosition: { x: 0, y: 0 },
        commands: [
          {
            name: 'forward',
            function: () => {
              console.log('move forward');
            },
          },
          {
            name: 'shoot',
            function: () => {
              console.log('shoot');
            },
          },
        ],
      },
      {
        id: 4,
        title: 'ES6+ 문법',
        description: '최신 JavaScript 문법(ES6+)을 학습합니다.',
        codeTemplate: '네번째 codeTemplate',
        answer: '4번정답',
        hint: '4번힌트',
        grid: [
          [0, 4, 4, 4],
          [0, 1, 0, 0],
          [0, 0, 2, 0],
          [0, 0, 0, 0],
        ],
        startPosition: { x: 0, y: 0 },
        commands: [
          {
            name: 'forward',
            function: () => {
              console.log('move forward');
            },
          },
          {
            name: 'shoot',
            function: () => {
              console.log('shoot');
            },
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

module.exports = { insertQuiz };
