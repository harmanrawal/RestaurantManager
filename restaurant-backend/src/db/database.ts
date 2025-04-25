import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export const initDb = async () => {
  const db = await open({
    filename: ':memory:', // or 'restaurant.db'
    driver: sqlite3.Database
  });

  // Create restaurants table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS restaurants (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      location TEXT NOT NULL,
      openTime TEXT NOT NULL,
      closeTime TEXT NOT NULL,
      status TEXT NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create tables table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS tables (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      restaurantId INTEGER NOT NULL,
      capacity INTEGER NOT NULL,
      status TEXT NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (restaurantId) REFERENCES restaurants(id)
    )
  `);

  // Create menu_items table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS menu_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      restaurantId INTEGER NOT NULL,
      name TEXT NOT NULL,
      price REAL NOT NULL,
      description TEXT,
      availability INTEGER NOT NULL,
      category TEXT,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (restaurantId) REFERENCES restaurants(id)
    )
  `);

  // Add restaurant
  const row = await db.get('SELECT id FROM restaurants WHERE name = ?', 'Tandoori Flames');
    if (!row) {
      await db.run(`INSERT INTO restaurants (name, location, openTime, closeTime, status) VALUES ('Tandoori Flames', 'Connaught Place, Delhi', '11:00', '23:30', 'OPEN')`);
}

  //Add Tables to restaurant
  await db.run(`
  INSERT INTO tables (restaurantId, capacity, status)
  VALUES
    (1, 4, 'FREE'),
    (1, 6, 'RESERVED')
`);

  // Seed sample dishes (restaurantId = 1)
  await db.run(`
    INSERT INTO menu_items (restaurantId, name, price, description, availability, category)
    VALUES
      (1, 'Paneer Butter Masala', 180.0, 'Creamy cottage cheese curry with tomato gravy', 1, 'North Indian'),
      (1, 'Chicken Biryani', 220.0, 'Fragrant rice cooked with marinated chicken and spices', 1, 'Hyderabadi'),
      (1, 'Masala Dosa', 120.0, 'Crispy rice crepe filled with spiced potato', 1, 'South Indian'),
      (1, 'Chole Bhature', 140.0, 'Spicy chickpeas served with deep-fried bread', 1, 'Punjabi')
  `);

  return db;
};
