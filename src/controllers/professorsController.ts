import { Request, Response } from 'express';
import NotFound from '../errors/NotFoundError';
import * as professorsService from '../services/professorsService';

export async function listBySubject(req: Request, res: Response) {
  const subjectId = Number(req.query.subjectId);
  let result;
  try {
    result = await professorsService.listBySubject(subjectId);
  } catch (error) {
    if (error instanceof NotFound) {
      return res.sendStatus(error.status);
    }
    return res.sendStatus(500);
  }
  return res.send(result);
}
