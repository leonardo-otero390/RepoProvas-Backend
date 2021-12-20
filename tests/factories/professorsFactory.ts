import { getRepository } from 'typeorm';
import faker from 'faker';
import { ProfessorsEntity } from '../../src/entities/ProfessorsEntity';
import { SubjectsEntity } from '../../src/entities/SubjectsEntity';
import { ProfessorsSubjectsEntity } from '../../src/entities/ProfessorsSubjectsEntity';

export async function createProfessor() {
  await getRepository(ProfessorsEntity).insert({
    name: faker.name.firstName(),
  });
}

export async function createProfessorSubject() {
  try {
    const resultSubject = await getRepository(SubjectsEntity)
      .createQueryBuilder('subjects')
      .orderBy('RANDOM()')
      .getOne();
    const subjectId = resultSubject.id;
    const resultProfessor = await getRepository(ProfessorsEntity)
      .createQueryBuilder('professors')
      .orderBy('RANDOM()')
      .getOne();
    const professorId = resultProfessor.id;
    await getRepository(ProfessorsSubjectsEntity).insert({
      subjectId,
      professorId,
    });
  } catch (error) {
    console.log(error.message);
  }
}
