import express, { Response, Request, Application, response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './db.ts';
import { Quiz } from './model/quiz.ts';
import { validate } from 'uuid';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(cors());
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript 서버 실행 중!');
});

app.get(
  '/api/quizzes/:id',
  async (req: Request<{ id: string }>, res: Response): Promise<void> => {
    try {
      const quizId = req.params.id;
      if (!validate(quizId)) {
        res
          .status(400)
          .json({ success: false, message: '유효한 uuid 입력부탁' });
        return;
      }
      const quiz = await Quiz.findOne({ id: quizId });
      if (!quiz) {
        res
          .status(404)
          .json({ success: false, message: '퀴즈를 찾을 수 없습니다.' });
        return;
      }
      res.status(200).json({ success: true, data: quiz });
    } catch (error) {
      res.status(500).json({ success: false, message: '서버 오류 발생' });
    }
  }
);

app.get(`api/quizzes`, async (req: Request, res: Response): Promise<void> => {
  try {
    const quizzes = await Quiz.find({}, 'id title');
    res.json(quizzes);
  } catch (error) {
    console.error('퀴즈 조회 오류', error);
    res.status(500).json({ error: '퀴즈 조회 오류' });
  }
});

app.listen(PORT, () => {
  console.log(`서버 실행: http://localhost:${PORT}`);
});
connectDB();
