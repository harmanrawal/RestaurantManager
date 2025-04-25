import { Request, Response } from 'express';
import { TableService } from '../services/table.service';

export class TableController {
  constructor(private tableService: TableService) {}

  addTables = async (req: Request, res: Response) => {
    try {
      const response = await this.tableService.addTables(req.body);
      res.status(201).json(response);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };

  getTables = async (req: Request, res: Response) => {
    try {
      const restaurantId = parseInt(req.params.restaurantId);
      const tables = await this.tableService.getTables(restaurantId);
      res.status(200).json(tables);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };

  deleteTable = async (req: Request, res: Response) => {
    try {
      const tableId = parseInt(req.params.tableId);
      const deleted = await this.tableService.deleteTable(tableId);
      res.status(deleted ? 200 : 404).json({ success: deleted });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };
}
