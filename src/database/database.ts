import { Pool } from "pg";
import { Kysely, PostgresDialect } from "kysely";
import { DB } from "./db";
import { config } from "../config/config";

const dialect = new PostgresDialect({
  // pool: new Pool({
  //   database: Config.env.app.database as string,
  //   host: Config.env.app.host as string,
  //   user: Config.env.app.username as string,
  //   password: Config.env.app.password as string,
  //   max: 999,
  // }),
  pool: new Pool({
    connectionString: config.env.database.url,
  }),
});

export const db = new Kysely<DB>({
  dialect,
});
