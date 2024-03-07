import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_ts_config_map")
    .addColumn("mapcfg", "text", (col) => col.primaryKey().notNull())
    .addColumn("maptokentype", "integer", (col) => col.primaryKey().notNull())
    .addColumn("mapseqno", "integer", (col) => col.primaryKey().notNull())
    .addColumn("mapdict", "text", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_ts_config_map").execute();
}