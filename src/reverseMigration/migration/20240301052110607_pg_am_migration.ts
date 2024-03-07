import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_am")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("amname", "text", (col) => col.unique().notNull())
    .addColumn("amhandler", "text", (col) => col.notNull())
    .addColumn("amtype", "char", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_am").execute();
}