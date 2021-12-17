import './setup';
import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import connectDatabase from './database';
import routes from './routes/routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
export async function init() {
  await connectDatabase();
}

export default app;
