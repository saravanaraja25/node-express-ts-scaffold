import type {
  Application,
  Request,
  Response,
  NextFunction,
  Router,
} from 'express';
import userRoute from './user.route';
import { handleErrors } from '@/middlewares/error-handler.middleware';

const appRoutes = (app: Application): void => {
  const routes = (): Router[] => [userRoute];

  routes().forEach(route => {
    app.use('/api', route);
  });

  app.use(handleErrors);
};

const appDefaultRoute = (app: Application): void => {
  app.use('*', (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
      message: 'Not Found',
    });
  });
};

const AppRoute = (app: Application): void => {
  appRoutes(app);
  appDefaultRoute(app);
};

export default AppRoute;
