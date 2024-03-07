import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_ts_template")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("tmplname", "text", (col) => col.unique().notNull())
    .addColumn("tmplnamespace", "text", (col) => col.unique().notNull())
    .addColumn("tmplinit", "text", (col) => col.notNull())
    .addColumn("tmpllexize", "text", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_ts_template").execute();
}