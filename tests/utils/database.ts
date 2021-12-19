import { getRepository } from 'typeorm';
import { SubjectsEntity } from '../../src/entities/SubjectsEntity';
import { createSubject } from '../factories/subjectFactory';

export async function clearDatabase() {
  await getRepository(SubjectsEntity).delete({});
}
export async function createThreeSubjects() {
  await createSubject();
  await createSubject();
  await createSubject();
}
