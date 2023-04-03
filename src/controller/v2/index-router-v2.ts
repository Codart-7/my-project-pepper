import { Router, Request, Response } from 'express';
import appController from '../v2/AppController';
import auth from '../v2/AuthController';
import { RoleRouter } from './rolesNpermissions/roleRouter';
import { InventoryRouter } from './Inventory/inventoryRouter';
import { UserRouter } from './User/UserRouter';

const router: Router = Router();


router.use('/roles', RoleRouter);
router.use('/inventory', InventoryRouter);
router.use('/user', UserRouter);


// Status
router.get('/status', appController.getStatus);

// Login
router.post('/login', auth.login);

// Logout
router.post('/logout', auth.logout);


export const V2IndexRouter: Router = router;
