const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./db');

dotenv.config();
import type { Application, Request, Response } from 'express';
const app: Application = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(cors());
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript 서버 실행 중!');
});

app.listen(PORT, () => {
  console.log(`서버 실행: http://localhost:${PORT}`);
});
connectDB();

module.exports = app;
