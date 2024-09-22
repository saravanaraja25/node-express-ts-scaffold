import { type Response } from 'express';
import { HTTP_STATUS } from '../constants/common.constants';

const ResponseUtil = {
  sendResponse(
    res: Response,
    status: number,
    message: string,
    data: any = null,
  ) {
    return res.status(status).json({
      status,
      message,
      data: data ?? null,
    });
  },

  success(res: Response, message = 'Success', data: any = null) {
    return this.sendResponse(res, HTTP_STATUS.SUCCESS, message, data);
  },

  created(res: Response, message = 'Resource Created', data: any = null) {
    return this.sendResponse(res, HTTP_STATUS.CREATED, message, data);
  },

  badRequest(res: Response, message = 'Bad Request', data: any = null) {
    return this.sendResponse(res, HTTP_STATUS.BAD_REQUEST, message, data);
  },

  unauthorized(res: Response, message = 'Unauthorized', data: any = null) {
    return this.sendResponse(res, HTTP_STATUS.UNAUTHORIZED, message, data);
  },

  forbidden(res: Response, message = 'Forbidden', data: any = null) {
    return this.sendResponse(res, HTTP_STATUS.FORBIDDEN, message, data);
  },

  notFound(res: Response, message = 'Not Found', data: any = null) {
    return this.sendResponse(res, HTTP_STATUS.NOT_FOUND, message, data);
  },

  noContent(res: Response, message = 'No Content', data: any = null) {
    return this.sendResponse(res, HTTP_STATUS.NO_CONTENT, message, data);
  },

  internalServerError(
    res: Response,
    message = 'Internal Server Error',
    data: any = null,
  ) {
    return this.sendResponse(
      res,
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      message,
      data,
    );
  },
};

export default ResponseUtil;
