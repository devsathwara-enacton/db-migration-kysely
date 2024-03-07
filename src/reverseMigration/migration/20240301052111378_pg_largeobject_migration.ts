import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_largeobject")
    .addColumn("loid", "text", (col) => col.primaryKey().notNull())
    .addColumn("pageno", "integer", (col) => col.primaryKey().notNull())
    .addColumn("data", "binary", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_largeobject").execute();
}