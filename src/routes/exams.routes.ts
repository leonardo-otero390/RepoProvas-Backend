import { Router } from 'express';
import * as examsController from '../controllers/examsController';

const routes = Router();

routes.post('/', examsController.create);

export default routes;
