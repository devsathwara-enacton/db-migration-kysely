import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_inherits")
    .addColumn("inhrelid", "text", (col) => col.primaryKey().notNull())
    .addColumn("inhparent", "text", (col) => col.notNull())
    .addColumn("inhseqno", "integer", (col) => col.primaryKey().notNull())
    .addColumn("inhdetachpending", "boolean", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_inherits").execute();
}