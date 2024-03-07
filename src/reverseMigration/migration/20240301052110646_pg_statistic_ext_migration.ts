import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_statistic_ext")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("stxrelid", "text", (col) => col.notNull())
    .addColumn("stxname", "text", (col) => col.unique().notNull())
    .addColumn("stxnamespace", "text", (col) => col.unique().notNull())
    .addColumn("stxowner", "text", (col) => col.notNull())
    .addColumn("stxstattarget", "integer", (col) => col.notNull())
    .addColumn("stxkeys", "text", (col) => col.notNull())
    .addColumn("stxkind", "text", (col) => col.notNull())
    .addColumn("stxexprs", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_statistic_ext").execute();
}