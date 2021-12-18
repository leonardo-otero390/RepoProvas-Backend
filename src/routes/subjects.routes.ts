import { Router } from 'express';
import * as subjectsController from '../controllers/subjectsController';

const routes = Router();

routes.get('/', subjectsController.list);

export default routes;
