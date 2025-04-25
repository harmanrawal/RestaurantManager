import { TableController } from '../../controllers/table.controller';

declare module 'express-serve-static-core' {
  interface Request {
    tableController?: TableController;
  }
}