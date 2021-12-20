import { Request, Response } from 'express';
import { HttpStatusCode } from '../errors/http.enum.ts';
import NotFound from '../errors/NotFoundError';
import * as categoriesService from '../services/categoriesService';

export async function list(req: Request, res: Response) {
  let result;
  try {
    result = await categoriesService.list();
  } catch (error) {
    if (error instanceof NotFound) {
      return res.sendStatus(error.status);
    }
    return res.sendStatus(HttpStatusCode.INTERNAL_SERVER_ERROR);
  }
  return res.send(result);
}
