import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pg;

/**
 * This pool use variable env for config value to connect with db;
 */
export default new Pool();