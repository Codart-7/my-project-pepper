import { Router, Request, Response } from 'express';
import appController from '../v2/AppController';
import { RoleRouter } from './rolesNpermissions/roleRouter';
import { InventoryRouter } from './Inventory/inventoryRouter';
import { UserRouter } from './User/UserRouter';
import { AuthRouter } from './Authentication/AuthRouter';

const router: Router = Router();


router.use('/roles', RoleRouter);
router.use('/inventory', InventoryRouter);
router.use('/user', UserRouter);
router.use('/auth', AuthRouter);


// Status
router.get('/status', appController.getStatus);


export const V2IndexRouter: Router = router;
