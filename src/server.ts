import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(cors());
app.get('/', (req: Request, res: Response) => {
  res.send(' Express + TypeScript 서버 실행 중!');
});
app.listen(PORT, () => {
  console.log(`✅ 서버 실행: http://localhost:${PORT}`);
});

export default app;
