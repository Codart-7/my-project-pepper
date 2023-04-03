import { Router, Request, Response } from 'express';
import roleController from '../rolesNpermissions/Controllers/RoleController';
import permissionController from '../rolesNpermissions/Controllers/PermissionController';
import auth from '../AuthController';

const router: Router = Router();

// Get all roles
router.get('/', auth.auth, roleController.getAll);

// Get a single role
router.get('/:roleID', auth.auth, roleController.getRole);

// Create a new role
router.post('/', auth.auth, roleController.createRole);

// Delete a role
router.delete('/rol/:roleID', auth.auth, roleController.deleteRole);

// Update a role
router.put('/roles/:roleID', auth.auth, roleController.updateRole);

router.get('/roles/:roleID/permissions', auth.auth, roleController.getRolePermissions);

// Add permission to a role
router.post('/roles/:roleID/add-permission', auth.auth, roleController.addPermission);

// Remove permission from a role
router.delete('/roles/:roleID/remove-permission', auth.auth, roleController.removePermission);

// Get all permissions
router.get('/permissions', auth.auth, permissionController.getAll);



export const RoleRouter: Router = router;