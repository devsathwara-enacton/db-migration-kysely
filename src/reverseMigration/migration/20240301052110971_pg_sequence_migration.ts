import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_sequence")
    .addColumn("seqrelid", "text", (col) => col.primaryKey().notNull())
    .addColumn("seqtypid", "text", (col) => col.notNull())
    .addColumn("seqstart", "text", (col) => col.notNull())
    .addColumn("seqincrement", "text", (col) => col.notNull())
    .addColumn("seqmax", "text", (col) => col.notNull())
    .addColumn("seqmin", "text", (col) => col.notNull())
    .addColumn("seqcache", "text", (col) => col.notNull())
    .addColumn("seqcycle", "boolean", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_sequence").execute();
}