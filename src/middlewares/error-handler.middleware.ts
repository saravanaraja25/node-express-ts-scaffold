import type { Request, Response, NextFunction } from 'express';
import { HTTP_STATUS } from '@/constants/common.constants';
import ResponseUtil from '@/utils/response.util';

// Error classes
class GeneralError extends Error {
  getCode(): number {
    if (this instanceof BadRequest) return HTTP_STATUS.BAD_REQUEST;
    if (this instanceof Unauthorized) return HTTP_STATUS.UNAUTHORIZED;
    if (this instanceof Forbidden) return HTTP_STATUS.FORBIDDEN;
    if (this instanceof NotFound) return HTTP_STATUS.NOT_FOUND;
    return HTTP_STATUS.INTERNAL_SERVER_ERROR;
  }
}

export class BadRequest extends GeneralError {}
export class Unauthorized extends GeneralError {}
export class Forbidden extends GeneralError {}
export class NotFound extends GeneralError {}

// Error handling middleware
export const handleErrors = (
  err: GeneralError,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const statusCode = err.getCode();

  switch (statusCode) {
    case 400:
      ResponseUtil.badRequest(res, err.message);
      break;
    case 401:
      ResponseUtil.unauthorized(res, err.message);
      break;
    case 403:
      ResponseUtil.forbidden(res, err.message);
      break;
    case 404:
      ResponseUtil.notFound(res, err.message);
      break;
    default:
      ResponseUtil.internalServerError(res, err.message);
      break;
  }
};
