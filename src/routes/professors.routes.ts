import { Router } from 'express';
import * as professorsController from '../controllers/professorsController';

const routes = Router();

routes.get('', professorsController.listBySubject);

export default routes;
