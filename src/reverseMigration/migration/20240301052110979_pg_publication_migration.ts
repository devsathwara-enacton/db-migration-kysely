import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_publication")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("pubname", "text", (col) => col.unique().notNull())
    .addColumn("pubowner", "text", (col) => col.notNull())
    .addColumn("puballtables", "boolean", (col) => col.notNull())
    .addColumn("pubinsert", "boolean", (col) => col.notNull())
    .addColumn("pubupdate", "boolean", (col) => col.notNull())
    .addColumn("pubdelete", "boolean", (col) => col.notNull())
    .addColumn("pubtruncate", "boolean", (col) => col.notNull())
    .addColumn("pubviaroot", "boolean", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_publication").execute();
}