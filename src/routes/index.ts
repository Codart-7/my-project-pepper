import express from 'express';
import appController from '../controller/AppController';
import auth from '../controller/AuthController';
import inventoryController from '../controller/InventoryController';
import permissionController from '../controller/PermissionController';
import roleController from '../controller/RoleController';
import userController from '../controller/UserController';

const router = express.Router();



// Start
router.get('/', (req, res) => {
    res.send('Hello and welcome to the Pepper Inventory!');
});
// curl localhost:5000/api/v1; echo ""

// Check app component status
/**
 * @openapi
 * /status
 * get:
 *  tag:
 *      - Healthcheck
 *      description: Responds for the db status
 *      responses:
 *          200:
 *              description: DBs are active
 */
router.get('/status', appController.getStatus)
// curl localhost:5000/api/v1/status; echo ""

// Login
router.post('/login', auth.login)
// curl -i -XPOST localhost:5000/api/v1/login -H "Authorization: Basic c3VwZXJhZG1pbjpzdXBlcmFkbWlu"; echo ""

// Logout
router.post('/logout', auth.logout)
// curl -XPOST -b "token=87772534-462e-4a18-aba7-5e15e6f4a5c7" localhost:5000/api/v1/logout; echo ""

// router.get("/inventory/:id", auth.auth, inventoryController.get)

// Get all roles
router.get('/roles', auth.auth, roleController.getAll)
// curl -b "token=ba52ccff-ff97-4995-9366-0af0cbf97dcb" localhost:5000/api/v1/roles; echo ""


// Get a single role
router.get('/roles/:roleID', auth.auth, roleController.getRole)
// curl -b "token=ba52ccff-ff97-4995-9366-0af0cbf97dcb" localhost:5000/api/v1/roles/1; echo ""
// Create a new role
router.post('/roles', auth.auth, roleController.createRole)
// curl -XPOST -b "token=ba52ccff-ff97-4995-9366-0af0cbf97dcb" localhost:5000/api/v1/roles -H "Content-Type: application/json" -d '{"name": "temp"}'; echo ""

// Delete a role
router.delete('/roles/:roleID', auth.auth, roleController.deleteRole)

// Update a role
router.put('/roles/:roleID', auth.auth, roleController.updateRole)
// curl -XPUT -b "token=ba52ccff-ff97-4995-9366-0af0cbf97dcb" localhost:5000/api/v1/roles/2 -H "Content-Type: application/json" -d '{"name": "temp-rename"}'; echo ""

// Add permission to a role
router.post('/roles/:roleID/add-permission', auth.auth, roleController.addPermission)
// curl -XPOST -b "token=ba52ccff-ff97-4995-9366-0af0cbf97dcb" localhost:5000/api/v1/roles/add-permission?roleID=2&permissionID=3; echo ""

// Remove permission from a role
router.delete('/roles/:roleID/remove-permission', auth.auth, roleController.removePermission)

// Get all permissions
router.get('/permissions', auth.auth, permissionController.getAll)
// curl -b "token=ba52ccff-ff97-4995-9366-0af0cbf97dcb" localhost:5000/api/v1/permissions; echo ""
// create a user
router.get('/users')
//update a user
router.put('/users/:id', auth.auth, userController.update)
//delete a user
router.delete('/users/:id', auth.auth, userController.delete)
//get a user
router.get('/users/:id', auth.auth, userController.fetch)
//fetch all users
router.get('/users', auth.auth, userController.getAll)
export default router;
