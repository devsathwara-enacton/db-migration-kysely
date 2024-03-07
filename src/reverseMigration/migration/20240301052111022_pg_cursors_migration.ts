import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_cursors")
    .addColumn("name", "text")
    .addColumn("statement", "text")
    .addColumn("is_holdable", "boolean")
    .addColumn("is_binary", "boolean")
    .addColumn("is_scrollable", "boolean")
    .addColumn("creation_time", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_cursors").execute();
}