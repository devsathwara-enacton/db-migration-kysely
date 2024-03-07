import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_conversion")
    .addColumn("oid", "text", (col) => col.unique().primaryKey().notNull())
    .addColumn("conname", "text", (col) => col.unique().notNull())
    .addColumn("connamespace", "text", (col) => col.unique().unique().notNull())
    .addColumn("conowner", "text", (col) => col.notNull())
    .addColumn("conforencoding", "integer", (col) => col.unique().notNull())
    .addColumn("contoencoding", "integer", (col) => col.unique().notNull())
    .addColumn("conproc", "text", (col) => col.notNull())
    .addColumn("condefault", "boolean", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_conversion").execute();
}