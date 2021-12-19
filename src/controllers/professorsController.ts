import { Request, Response } from 'express';
import NotFound from '../errors/NotFoundError';
import * as professorsService from '../services/professorsService';

export async function listBySubject(req: Request, res: Response) {
  const subjectId = Number(req.query.subjectId);
  console.log(subjectId);
  let result;
  try {
    result = await professorsService.listBySubject(subjectId);
  } catch (error) {
    if (error instanceof NotFound) {
      return res.sendStatus(error.status);
    }
    console.log(error.message);
    return res.sendStatus(500);
  }
  return res.send(result);
}
