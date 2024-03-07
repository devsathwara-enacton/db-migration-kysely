import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_statistic_ext_data")
    .addColumn("stxoid", "text", (col) => col.primaryKey().notNull())
    .addColumn("stxdinherit", "boolean", (col) => col.primaryKey().notNull())
    .addColumn("stxdndistinct", "text")
    .addColumn("stxddependencies", "text")
    .addColumn("stxdmcv", "text")
    .addColumn("stxdexpr", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_statistic_ext_data").execute();
}