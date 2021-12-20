export default class BadRequest extends Error {
  status: number;

  constructor() {
    super();
    this.message = 'Bad Request';
    this.status = 400;
  }
}
