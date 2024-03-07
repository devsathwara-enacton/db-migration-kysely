import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_namespace")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("nspname", "text", (col) => col.unique().notNull())
    .addColumn("nspowner", "text", (col) => col.notNull())
    .addColumn("nspacl", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_namespace").execute();
}