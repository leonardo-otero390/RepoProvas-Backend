import { getRepository } from 'typeorm';
import { CategoriesEntity } from '../entities/CategoriesEntity';
import { ExamsEntity } from '../entities/ExamsEntity';
import { ProfessorsSubjectsEntity } from '../entities/ProfessorsSubjectsEntity';
import NotFound from '../errors/NotFoundError';
import { CreateExam } from '../protocols/examInterface';

export async function create(examObject: CreateExam) {
  const professorSubject = await getRepository(
    ProfessorsSubjectsEntity,
  ).findOne({
    where: {
      professorId: examObject.professorId,
      subjectId: examObject.subjectId,
    },
  });
  const newExam = await getRepository(ExamsEntity).create({
    professorSubjectId: professorSubject.id,
    name: examObject.name,
    categoryId: examObject.categoryId,
    pdfLink: examObject.pdfLink,
  });
  await getRepository(ExamsEntity).save(newExam);
  return newExam;
}

export async function listCategories() {
  const result = await getRepository(CategoriesEntity).find();
  if (!result?.length) throw new NotFound();
  return result;
}
