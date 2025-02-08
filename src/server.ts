import express, { Response, Request, Application, response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './db.ts';
import { Quiz } from './model/quiz.ts';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(cors());
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript 서버 실행 중!');
});
app.get(
  `/api/quizzes/firstQuiz`,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const firstQuiz = await Quiz.findOne({ isFirst: true });
      if (!firstQuiz) {
        res.status(404).json({ message: '퀴즈없슴' });
        return;
      }
      res.json(firstQuiz);
    } catch (error) {
      res.status(500).json({ message: '서버오류발생' });
    }
  }
);
app.get(
  '/api/quizzes/:id',
  async (req: Request, res: Response): Promise<void> => {
    try {
      const currentQuiz = await Quiz.findOne({ id: req.params.id });
      if (!currentQuiz) {
        res.status(404).json({ message: '퀴즈없음' });
        return;
      }
      res.json({
        currentQuiz,
      });
    } catch (error) {
      res.status(500).json({ message: '서버오류' });
    }
  }
);
app.listen(PORT, () => {
  console.log(`서버 실행: http://localhost:${PORT}`);
});

connectDB();
