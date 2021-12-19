export default class NotFound extends Error {
  status: number;

  constructor() {
    super();
    this.message = 'Not found';
    this.status = 404;
  }
}
