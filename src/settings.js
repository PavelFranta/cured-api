import dotenv from 'dotenv';
dotenv.config();

export const dbHost = process.env.DB_HOST;
export const dbDatabase = process.env.DB_DATABASE;
export const dbUser = process.env.DB_USER;
export const dbPort = process.env.DB_PORT;
export const dbPassword = process.env.DB_PASSWORD;
export const dbURI = process.env.DATABASE_URL;
export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const isDevelopment = process.env.NODE_ENV === 'development' ? true : false;

const localdb =  {
  host: 'localhost',
  post: '5432',
  database: 'cured-api',
  user: 'pavlicek',
  password: 'pavlicek',
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

export const BASE_URL = isDevelopment ? localdb : productiondb;
