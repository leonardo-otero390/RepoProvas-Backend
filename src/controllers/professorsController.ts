import { Request, Response } from 'express';
import BadRequestError from '../errors/BadRequestError';
import { HttpStatusCode } from '../errors/http.enum.ts';
import NotFound from '../errors/NotFoundError';
import * as professorsService from '../services/professorsService';

export async function listBySubject(req: Request, res: Response) {
  const subjectId = Number(req.query.subjectId);
  if (Number.isNaN(subjectId)) {
    return res.sendStatus(HttpStatusCode.BAD_REQUEST);
  }
  let result;
  try {
    result = await professorsService.listBySubject(subjectId);
  } catch (error) {
    if (error instanceof NotFound) {
      return res.sendStatus(error.status);
    }
    return res.sendStatus(HttpStatusCode.INTERNAL_SERVER_ERROR);
  }
  return res.send(result);
}
