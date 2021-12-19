import '../../src/setup';
import { getConnection } from 'typeorm';
import supertest from 'supertest';
import app, { init } from '../../src/app';
import { clearDatabase, createThreeSubjects } from '../utils/database';

beforeAll(async () => {
  await init();
  await createThreeSubjects();
});

afterAll(async () => {
  await getConnection().close();
});

afterEach(async () => {
  await clearDatabase();
});
const agent = supertest(app);
describe('GET /subjects', () => {
  it('should return 200', async () => {
    const response = await agent.get('/subjects');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should return 404', async () => {
    const response = await agent.get('/subjects');
    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({});
  });
});
