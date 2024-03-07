import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_largeobject_metadata")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("lomowner", "text", (col) => col.notNull())
    .addColumn("lomacl", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_largeobject_metadata").execute();
}