import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
const supabaseUrl = process.env.SUPABSE_DB_URL;
if (!supabaseUrl) {
  throw new Error("SUPABSE_DB_URL is not set");
}
const client = postgres(supabaseUrl);
export const db = drizzle(client);
