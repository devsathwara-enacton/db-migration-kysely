import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_ts_config")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("cfgname", "text", (col) => col.unique().notNull())
    .addColumn("cfgnamespace", "text", (col) => col.unique().notNull())
    .addColumn("cfgowner", "text", (col) => col.notNull())
    .addColumn("cfgparser", "text", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_ts_config").execute();
}