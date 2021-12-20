import BadRequest from '../errors/BadRequestError';
import { CreateExam } from '../protocols/examInterface';
import * as schemas from './schemas';

async function validateExamBody(
  examBody: CreateExam,
): Promise<boolean | BadRequest> {
  const validation = schemas.examBodySchema.validate(examBody);
  if (validation.error) throw new BadRequest();
  return true;
}

export { validateExamBody };
