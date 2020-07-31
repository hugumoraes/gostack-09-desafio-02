import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

import authMiddleware from './app/middleware/auth';

const routes = Router();

routes.post('/sessions', SessionController.store);

routes.post('/recipient', authMiddleware, RecipientController.store);

export default routes;
