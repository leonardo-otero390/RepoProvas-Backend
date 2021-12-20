import { getRepository } from 'typeorm';
import { ExamsEntity } from '../entities/ExamsEntity';
import { CreateExam } from '../protocols/examInterface';

export async function create(examObject: CreateExam) {
  const newExam = await getRepository(ExamsEntity).create(examObject);
  await getRepository(ExamsEntity).save(newExam);
  return newExam;
}
