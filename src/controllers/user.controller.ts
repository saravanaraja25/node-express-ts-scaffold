import logger from '@/utils/logger.util';
import ResponseUtil from '@/utils/response.util';
import type { NextFunction, Request, Response } from 'express';

class UserController {
  /** GET /api/user
   * @param req Request
   * @param res Response
   * @param next NextFunction
   * @returns void
   * @description Get all users
   * @access Public
   * @route /api/user
   * @method GET
   */
  public getUsers = (req: Request, res: Response, next: NextFunction): void => {
    try {
      logger.info('Entering UserController.getUsers, Endpoint: GET /api/user');
      logger.info('Exiting UserController.getUsers, Endpoint: GET /api/user');
      ResponseUtil.success(res, 'Get all users');
    } catch (error) {
      logger.error('Error in UserController.getUsers, Error: ', error);
      next(error);
    }
  };

  /** POST /api/user
   * @param req Request
   * @param res Response
   * @param next NextFunction
   * @returns void
   * @description Create a user
   * @access Public
   * @route /api/user
   * @method POST
   */
  public createUser = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    try {
      logger.info(
        'Entering UserController.createUser, Endpoint: POST /api/user',
      );
      res.status(200).json({
        message: 'Create a user',
      });
    } catch (error) {
      logger.error('Error in UserController.createUser, Error: ', error);
      next(error);
    }
  };

  /** PUT /api/user/:id
   * @param req Request
   * @param res Response
   * @param next NextFunction
   * @returns void
   * @description Update a user
   * @access Public
   * @route /api/user/:id
   * @method PUT
   */
  public updateUser = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    try {
      logger.info(
        'Entering UserController.updateUser, Endpoint: PUT /api/user/:id',
      );
      res.status(200).json({
        message: 'Update a user',
      });
    } catch (error) {
      logger.error('Error in UserController.updateUser, Error: ', error);
      next(error);
    }
  };

  /** DELETE /api/user/:id
   * @param req Request
   * @param res Response
   * @param next NextFunction
   * @returns void
   * @description Delete a user
   * @access Public
   * @route /api/user/:id
   * @method DELETE
   */
  public deleteUser = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    try {
      logger.info(
        'Entering UserController.deleteUser, Endpoint: DELETE /api/user/:id',
      );
      res.status(200).json({
        message: 'Delete a user',
      });
    } catch (error) {
      logger.error('Error in UserController.deleteUser, Error: ', error);
      next(error);
    }
  };

  /** GET /api/user/:id
   * @param req Request
   * @param res Response
   * @param next NextFunction
   * @returns void
   * @description Get a user
   * @access Public
   * @route /api/user/:id
   * @method GET
   */
  public getUser = (req: Request, res: Response, next: NextFunction): void => {
    try {
      logger.info(
        'Entering UserController.getUser, Endpoint: GET /api/user/:id',
      );
      res.status(200).json({
        message: 'Get a user',
      });
    } catch (error) {
      logger.error('Error in UserController.getUser, Error: ', error);
      next(error);
    }
  };
}

export default UserController;
