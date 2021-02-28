import { Pool } from 'pg';
import { BASE_URL } from '../settings';

export const pool = new Pool(BASE_URL);