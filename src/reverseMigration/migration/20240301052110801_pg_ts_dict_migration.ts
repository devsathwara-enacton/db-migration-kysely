import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_ts_dict")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("dictname", "text", (col) => col.unique().notNull())
    .addColumn("dictnamespace", "text", (col) => col.unique().notNull())
    .addColumn("dictowner", "text", (col) => col.notNull())
    .addColumn("dicttemplate", "text", (col) => col.notNull())
    .addColumn("dictinitoption", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_ts_dict").execute();
}