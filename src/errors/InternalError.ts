export default class InternalError extends Error {
  status: number;

  constructor() {
    super();
    this.message = 'Internal Error';
    this.status = 500;
  }
}
