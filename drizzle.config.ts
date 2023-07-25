import type { Config } from "drizzle-kit";
import * as dotenv from 'dotenv'
dotenv.config()


export default {
  schema: "./drizzle/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
  introspect: {casing: "preserve"},

} satisfies Config;