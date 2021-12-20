import { Router } from 'express';
import * as subjectsController from '../controllers/subjectsController';

const routes = Router();

routes.get('/', subjectsController.list);
routes.get('/by-semesters', subjectsController.listBySemester);

export default routes;
