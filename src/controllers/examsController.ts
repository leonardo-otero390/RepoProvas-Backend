import { Request, Response } from 'express';
import BadRequest from '../errors/BadRequestError';
import { HttpStatusCode } from '../errors/http.enum.ts';
import * as examsService from '../services/examsService';
import { validateExamBody } from '../validations/examValidation';

export async function create(req: Request, res: Response) {
  const body = req.body;
  let result;
  try {
    await validateExamBody(body);
    result = await examsService.create(body);
  } catch (error) {
    console.log(error.message);
    if (error instanceof BadRequest) {
      return res.sendStatus(error.status);
    }
    return res.sendStatus(HttpStatusCode.INTERNAL_SERVER_ERROR);
  }
  return res.status(HttpStatusCode.CREATED).send(result);
}
