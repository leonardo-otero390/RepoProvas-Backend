import { Router } from 'express';
import * as examsController from '../controllers/examsController';

const routes = Router();

routes.post('/', examsController.create);
routes.get('/categories', examsController.listCategories);
export default routes;
