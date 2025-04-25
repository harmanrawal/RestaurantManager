import { TableService } from '../../src/services/table.service';
import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

let db: Database;
let service: TableService;

beforeEach(async () => {
  db = await open({
    filename: ':memory:',
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE restaurants (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      location TEXT NOT NULL,
      openTime TEXT NOT NULL,
      closeTime TEXT NOT NULL,
      status TEXT NOT NULL
    );
    CREATE TABLE tables (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      restaurantId INTEGER NOT NULL,
      capacity INTEGER NOT NULL,
      status TEXT NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (restaurantId) REFERENCES restaurants(id)
    );
  `);

  await db.run(`
    INSERT INTO restaurants (name, location, openTime, closeTime, status)
    VALUES ('Tandoori Flames', 'Delhi', '10:00', '22:00', 'OPEN')
  `);

  service = new TableService(db);
});

afterEach(async () => {
  await db.close();
});

describe('TableService Unit Tests', () => {
  test('Should add 3 tables for a valid restaurant', async () => {
    const result = await service.addTables({
      restaurantId: 1,
      quantity: 3,
      maxCapacity: 6
    });

    expect(result.success).toBe(true);
    expect(result.tableIds.length).toBe(3);
  });

  test('Should throw error for invalid restaurant ID', async () => {
    await expect(service.addTables({
      restaurantId: 999,
      quantity: 2,
      maxCapacity: 4
    })).rejects.toThrow('Restaurant not found');
  });

  test('Should return table data for a restaurant', async () => {
    await service.addTables({
      restaurantId: 1,
      quantity: 1,
      maxCapacity: 4
    });

    const tables = await service.getTables(1);
    expect(tables.length).toBe(1);
    expect(tables[0].capacity).toBe(4);
  });

  test('Should delete a table successfully', async () => {
    const { tableIds } = await service.addTables({
      restaurantId: 1,
      quantity: 1,
      maxCapacity: 2
    });

    const deleted = await service.deleteTable(tableIds[0]);
    expect(deleted).toBe(true);
  });

  test('Should return false when deleting invalid table ID', async () => {
    const result = await service.deleteTable(999);
    expect(result).toBe(false);
  });
});
