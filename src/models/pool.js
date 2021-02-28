import { Pool } from 'pg';
import dotenv from 'dotenv';
import { dbURI, isDevelopment } from '../settings';
dotenv.config();

const localdb =  {
  host: 'localhost',
  post: '5432',
  database: 'cured',
  password: 'cured',
  user: 'postgres',
  ssl: {
    rejectUnauthorized: false
  }
};

const productiondb = {
  connectionString: dbURI,
  ssl: {
    rejectUnauthorized: false
  }
};

export const pool = new Pool( isDevelopment ? localdb : productiondb);