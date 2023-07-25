import { drizzle } from 'drizzle-orm/mysql2';

import mysql from 'mysql2/promise';
import * as schema from '@/drizzle/schema'

// create the connection
const poolConnection = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  database: process.env.DATABASE,
  password: process.env.DATABASE_PASSWORD,
  /* ssl: {rejectUnauthorized: true} */
  
});

const db = drizzle(poolConnection,{schema});

export default db