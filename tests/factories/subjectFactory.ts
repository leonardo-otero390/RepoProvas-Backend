import { getRepository } from 'typeorm';
import faker from 'faker';
import { SubjectsEntity } from '../../src/entities/SubjectsEntity';

export async function createSubject() {
  await getRepository(SubjectsEntity).insert({
    name: faker.name.title(),
    semesterId: faker.datatype.number({ max: 10, min: 1 }),
  });
}
