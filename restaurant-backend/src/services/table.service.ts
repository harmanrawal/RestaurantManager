import { AddTablesRequest } from '../dto/AddTablesRequest';
import { AddTablesResponse } from '../dto/AddTablesResponse';
import { Table } from '../models/Table';
import { Database } from 'sqlite';

export class TableService {
  constructor(private db: Database) {}

  async restaurantExists(restaurantId: number): Promise<boolean> {
    const result = await this.db.get('SELECT id FROM restaurants WHERE id = ?', restaurantId);
    return !!result;
  }

  async addTables(req: AddTablesRequest): Promise<AddTablesResponse> {
    if (!req.restaurantId || isNaN(req.restaurantId)) {
      throw new Error('Invalid restaurant ID');
    }

    if (!(await this.restaurantExists(req.restaurantId))) {
      throw new Error('Restaurant not found');
    }

    const tableIds: number[] = [];
    const stmt = await this.db.prepare(
      `INSERT INTO tables (restaurantId, capacity, status) VALUES (?, ?, ?)`
    );

    for (let i = 0; i < req.quantity; i++) {
      const result = await stmt.run(req.restaurantId, req.maxCapacity, 'FREE');
      if (result.lastID !== undefined) {
        tableIds.push(result.lastID);
      }
    }

    await stmt.finalize();
    return { success: true, tableIds };
  }

  async getTables(restaurantId: number): Promise<Table[]> {
    return await this.db.all<Table[]>(
      'SELECT * FROM tables WHERE restaurantId = ?', restaurantId
    );
  }

  async deleteTable(tableId: number): Promise<boolean> {
    const result = await this.db.run('DELETE FROM tables WHERE id = ?', tableId);
    return (result?.changes ?? 0) > 0;
  }
}
