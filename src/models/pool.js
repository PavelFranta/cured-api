import { Pool } from 'pg';
import dotenv from 'dotenv';
import { dbURI } from '../settings';
dotenv.config();

export const pool = new Pool({
  connectionString: dbURI,
  ssl: {
    rejectUnauthorized: false
  }
});