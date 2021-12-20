import { getRepository } from 'typeorm';
import { ProfessorsEntity } from '../../src/entities/ProfessorsEntity';
import { ProfessorsSubjectsEntity } from '../../src/entities/ProfessorsSubjectsEntity';
import { SubjectsEntity } from '../../src/entities/SubjectsEntity';
import {
  createProfessor,
  createProfessorSubject,
} from '../factories/professorsFactory';
import { createSubject } from '../factories/subjectFactory';

export async function clearDatabase() {
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
