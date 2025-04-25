import { Router, Request, Response } from 'express';
import { TableController } from '../controllers/table.controller';
import { TableService } from '../services/table.service';

const router = Router();

// Wrap each route in a closure with service injected
const withController = (handler: (controller: TableController, req: Request, res: Response) => void) => {
  return async (req: Request, res: Response) => {
    const db = req.app.locals.db;
    const controller = new TableController(new TableService(db));
    await handler(controller, req, res);
  };
};

router.post('/', withController((controller, req, res) => controller.addTables(req, res)));
router.get('/:restaurantId', withController((controller, req, res) => controller.getTables(req, res)));
router.delete('/:tableId', withController((controller, req, res) => controller.deleteTable(req, res)));

export default router;
