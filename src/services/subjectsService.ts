import { getRepository } from 'typeorm';
import { SubjectsEntity } from '../entities/SubjectsEntity';

export async function list() {
  const result = await getRepository(SubjectsEntity).find();
  const subjects = result.map((subject) => {
    return {
      id: subject.id,
      name: subject.name,
      semester: subject.semester.name,
    };
  });
  return subjects;
}
