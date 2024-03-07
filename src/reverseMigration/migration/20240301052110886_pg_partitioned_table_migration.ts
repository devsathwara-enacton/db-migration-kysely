import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_partitioned_table")
    .addColumn("partrelid", "text", (col) => col.primaryKey().notNull())
    .addColumn("partstrat", "char", (col) => col.notNull())
    .addColumn("partnatts", "int2", (col) => col.notNull())
    .addColumn("partdefid", "text", (col) => col.notNull())
    .addColumn("partattrs", "text", (col) => col.notNull())
    .addColumn("partclass", "text", (col) => col.notNull())
    .addColumn("partcollation", "text", (col) => col.notNull())
    .addColumn("partexprs", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_partitioned_table").execute();
}