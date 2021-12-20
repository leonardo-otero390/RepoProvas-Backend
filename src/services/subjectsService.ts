import { getRepository } from 'typeorm';
import { SemestersEntity } from '../entities/SemestersEntity';
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
export async function listBySemester() {
  const semesters = await getRepository(SemestersEntity).find();
  const subjects = await getRepository(SubjectsEntity).find();
  if (!subjects?.length || !semesters?.length) throw new NotFound();

  const arrayOfSemesters = semesters.map((semester) => {
    const arrayOfSubjects = subjects
      .filter((subject) => semester.id === subject.semesterId)
      .map((subject) => {
        return { id: subject.id, name: subject.name };
      });
    return { semester, arrayOfSubjects };
  });

  return arrayOfSemesters;
}
