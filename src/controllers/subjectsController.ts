import { Request, Response } from 'express';
import NotFound from '../errors/NotFoundError';
import * as subjectsService from '../services/subjectsService';

export async function list(req: Request, res: Response) {
  let result;
  try {
    result = await subjectsService.list();
  } catch (error) {
    if (error instanceof NotFound) {
      return res.sendStatus(error.status);
    }
  }
  return res.send(result);
}
