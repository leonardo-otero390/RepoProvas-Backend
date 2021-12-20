import { getRepository } from 'typeorm';
import { CategoriesEntity } from '../../src/entities/CategoriesEntity';
import { ExamsEntity } from '../../src/entities/ExamsEntity';
import { ProfessorsEntity } from '../../src/entities/ProfessorsEntity';
import { ProfessorsSubjectsEntity } from '../../src/entities/ProfessorsSubjectsEntity';
import { SubjectsEntity } from '../../src/entities/SubjectsEntity';
import {
  createProfessor,
  createProfessorSubject,
} from '../factories/professorsFactory';
import { createSubject } from '../factories/subjectFactory';

export async function clearDatabase() {
  await getRepository(ExamsEntity).delete({});
  await getRepository(ProfessorsSubjectsEntity).delete({});
  await getRepository(SubjectsEntity).delete({});
  await getRepository(ProfessorsEntity).delete({});
}
export async function createThreeSubjects() {
  await createSubject();
  await createSubject();
  await createSubject();
}
export async function createThreeProfessors() {
  await createProfessor();
  await createProfessor();
  await createProfessor();
}
export async function createSixProfessorSubject() {
  await createProfessorSubject();
  await createProfessorSubject();
  await createProfessorSubject();
  await createProfessorSubject();
  await createProfessorSubject();
  await createProfessorSubject();
}
export async function populateWithProfessorAndSubject() {
  await createThreeSubjects();
  await createThreeProfessors();
  await createSixProfessorSubject();
}
export async function findRandomSubjectId(): Promise<number> {
  const result = await getRepository(SubjectsEntity)
    .createQueryBuilder('subjects')
    .orderBy('RANDOM()')
    .getOne();
  return result.id;
}

export async function findRandomCategoryId(): Promise<number> {
  const result = await getRepository(CategoriesEntity)
    .createQueryBuilder('categories')
    .orderBy('RANDOM()')
    .getOne();
  return result.id;
}

export async function findRandomProfessorSubject() {
  const result = await getRepository(ProfessorsSubjectsEntity)
    .createQueryBuilder('professor_subjects')
    .orderBy('RANDOM()')
    .getOne();
  return result;
}
