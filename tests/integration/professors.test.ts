import { getConnection } from 'typeorm';
import supertest from 'supertest';
import app, { init } from '../../src/app';
import {
  clearDatabase,
  findRandomSubjectId,
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
describe('GET /professors?subjectId=', () => {
  it('should return 200', async () => {
    const subjectId = await findRandomSubjectId();
    const response = await agent.get(`/professors?subjectId=${subjectId}`);
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
  it('should return 404 when id doesnt exists', async () => {
    const response = await agent.get(`/professors?subjectId=0`);
    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({});
  });
  it('should return 400 when query is invalid', async () => {
    const response = await agent.get(`/professors?subjectId=dois`);
    expect(response.status).toBe(400);
  });
});
