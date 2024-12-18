import dotenv from 'dotenv';
dotenv.config();

export default {
  port: 5000,
  dbUri: process.env.MONGODB_URI,
  saltWorkFactor: 10
}