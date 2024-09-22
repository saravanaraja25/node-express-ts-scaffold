import UserController from '@/controllers/user.controller';
import { Router } from 'express';

class UserRoute {
  public router: Router;
  public path = '/user';
  public controller: UserController;

  constructor() {
    this.router = Router();
    this.controller = new UserController();
    this.init();
  }

  public init = (): void => {
    this.router.get(this.path, this.controller.getUsers);
    this.router.get(`${this.path}/:id`, this.controller.getUser);
    this.router.post(this.path, this.controller.createUser);
    this.router.put(`${this.path}/:id`, this.controller.updateUser);
    this.router.delete(`${this.path}/:id`, this.controller.deleteUser);
  };
}

export default new UserRoute().router;
