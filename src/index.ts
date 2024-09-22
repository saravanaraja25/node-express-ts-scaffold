import express, { type Application } from 'express';
import cors from 'cors';
import AppRoute from '@/api';

export const init = (): void => {
  const app: Application = express();
  const port = process.env.PORT ?? 3000;

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  AppRoute(app);

  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
};
