import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_range")
    .addColumn("rngtypid", "text", (col) => col.primaryKey().notNull())
    .addColumn("rngsubtype", "text", (col) => col.notNull())
    .addColumn("rngmultitypid", "text", (col) => col.unique().notNull())
    .addColumn("rngcollation", "text", (col) => col.notNull())
    .addColumn("rngsubopc", "text", (col) => col.notNull())
    .addColumn("rngcanonical", "text", (col) => col.notNull())
    .addColumn("rngsubdiff", "text", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_range").execute();
}