import { Request, Response } from 'express';
import * as subjectsService from '../services/subjectsService';

export async function list(req: Request, res: Response) {
  const result = await subjectsService.list();
  return res.send(result);
}
