import { getRepository } from 'typeorm';
import { CategoriesEntity } from '../entities/CategoriesEntity';
import NotFound from '../errors/NotFoundError';

export async function list() {
  const result = await getRepository(CategoriesEntity).find();
  if (!result?.length) throw new NotFound();
  return result;
}
