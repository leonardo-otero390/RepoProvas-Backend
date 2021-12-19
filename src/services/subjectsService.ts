import { getRepository } from 'typeorm';
import { SubjectsEntity } from '../entities/SubjectsEntity';
import NotFound from '../errors/NotFoundError';

export async function list() {
  const result = await getRepository(SubjectsEntity).find();
  if (!result?.length) throw new NotFound();
  const subjects = result.map((subject) => {
    return {
      id: subject.id,
      name: subject.name,
      semester: subject.semester.name,
    };
  });
  return subjects;
}
