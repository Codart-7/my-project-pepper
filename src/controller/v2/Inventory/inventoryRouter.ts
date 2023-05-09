import { Router } from 'express';
import inventoryController from './InventoryController';
import auth from '../Authentication/AuthController';

const router: Router = Router();

// Get all inventory items
router.get('/', auth.auth, inventoryController.fetchInventory);

// Create new inventory item
router.post('/create', auth.auth, inventoryController.create);
// curl -XPOST -b "token=779af205-ad78-4fe3-bc98-b6841d02e837" localhost:5000/api/v1/inventory/create -H 'Content-Type: application/json' -d '{"name": "sample", "description": "A sample product", "quantity": 10}'; echo ""

// Update an inventory item
router.put('/:itemID', auth.auth, inventoryController.updateItem);

// Fetch an inventory item
router.get('/:itemID', auth.auth, inventoryController.fetchItem);

// Delete an inventory item
router.delete('/:itemID', auth.auth, inventoryController.deleteItem);

// Selling an inventory item
router.put('/:itemID/sell', auth.auth, inventoryController.sellItem)

// Restocking an inventory item
router.put('/:itemID/restock', auth.auth, inventoryController.restockItem)


export const InventoryRouter: Router = router;