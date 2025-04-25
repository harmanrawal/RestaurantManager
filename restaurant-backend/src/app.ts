import express from 'express';
import tableRoutes from './routes/table.routes';
import dotenv from 'dotenv';
import { initDb } from './db/database';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors()); 
app.use(express.json());

export const setupApp = async () => {
  const db = await initDb();
  app.locals.db = db;
  
  app.use('/api/tables', tableRoutes);

  app.get('/api/restaurants', async (req, res) => {
	  const rows = await db.all('SELECT * FROM restaurants');
	  res.status(200).json(rows);
  });
  return app;
};
