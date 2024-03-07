import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_attrdef")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("adrelid", "text", (col) => col.unique().notNull())
    .addColumn("adnum", "int2", (col) => col.unique().notNull())
    .addColumn("adbin", "text", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_attrdef").execute();
}