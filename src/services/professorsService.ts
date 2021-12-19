import { getRepository } from 'typeorm';
import { ProfessorsSubjectsEntity } from '../entities/ProfessorsSubjectsEntity';
import NotFound from '../errors/NotFoundError';

export async function listBySubject(subjectId: number) {
  const result = await getRepository(ProfessorsSubjectsEntity).find({
    where: { subjectId },
  });
  if (!result?.length) throw new NotFound();
  return result.map((res) => res.professor);
}
