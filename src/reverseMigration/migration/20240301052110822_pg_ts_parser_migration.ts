import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_ts_parser")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("prsname", "text", (col) => col.unique().notNull())
    .addColumn("prsnamespace", "text", (col) => col.unique().notNull())
    .addColumn("prsstart", "text", (col) => col.notNull())
    .addColumn("prstoken", "text", (col) => col.notNull())
    .addColumn("prsend", "text", (col) => col.notNull())
    .addColumn("prsheadline", "text", (col) => col.notNull())
    .addColumn("prslextype", "text", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_ts_parser").execute();
}