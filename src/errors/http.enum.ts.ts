/* eslint-disable no-shadow */
export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  FORBIDEN = 403,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum HttpStatusText {
  OK = 'ok',
  FORBIDEN = 'forbiden',
  BAD_REQUEST = 'bad request',
  NOT_FOUND = 'not found',
}
