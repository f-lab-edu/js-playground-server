import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || '';
export const connectDB = async () => {
  console.log('db연결 시도');
  try {
    await mongoose.connect(MONGO_URI);
    console.log('DB연결 성공');
  } catch (error) {
    console.error('mongodb 실패', error);
  }
};
