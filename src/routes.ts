import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';

const routes = Router();

const settingsController = new SettingsController();

/**
 * Routes params
 * http://localhost:3333/settings/1
 * Query Params
 * http://localhost:3333/settings/1?search=something
 * Body Params => JSON inside requests
 */

routes.post('/settings', settingsController.create);

export { routes };