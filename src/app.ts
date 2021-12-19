import './setup';
import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import connectDatabase from './database';
import routes from './routes/routes';
import subjectRoutes from './routes/subjects.routes';
import professorsRoutes from './routes/professors.routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);
app.use('/subjects', subjectRoutes);
app.use('/professors', professorsRoutes);

export async function init() {
  await connectDatabase();
}

export default app;
