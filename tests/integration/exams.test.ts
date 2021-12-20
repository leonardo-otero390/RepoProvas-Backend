import { getConnection } from 'typeorm';
import supertest from 'supertest';
import faker from 'faker';
import app, { init } from '../../src/app';
import {
  clearDatabase,
  findRandomCategoryId,
  findRandomProfessorSubject,
  populateWithProfessorAndSubject,
} from '../utils/database';

beforeAll(async () => {
  await init();
  await populateWithProfessorAndSubject();
});

afterAll(async () => {
  await getConnection().close();
});

afterEach(async () => {
  await clearDatabase();
});
const agent = supertest(app);
describe('POST /exams', () => {
  it('should return 200', async () => {
    const { subjectId, professorId } = await findRandomProfessorSubject();
    const categoryId = await findRandomCategoryId();
    const name = faker.name.title();
    const link = faker.internet.url();
    const pdfLink = `${link}.pdf`;
    const response = await agent
      .post('/exams')
      .send({ subjectId, professorId, categoryId, name, pdfLink });
    expect(response.status).toBe(201);
  });
  it('should return 400', async () => {
    const name = faker.name.title();
    const link = faker.internet.url();
    const pdfLink = `${link}.pdf`;
    const response = await agent.post('/exams').send({ name, pdfLink });
    expect(response.status).toBe(400);
  });
  it('should return 500', async () => {
    const subjectId = 0;
    const professorId = 0;
    const categoryId = 0;
    const name = faker.name.title();
    const link = faker.internet.url();
    const pdfLink = `${link}.pdf`;
    const response = await agent
      .post('/exams')
      .send({ subjectId, professorId, categoryId, name, pdfLink });
    expect(response.status).toBe(500);
  });
});
