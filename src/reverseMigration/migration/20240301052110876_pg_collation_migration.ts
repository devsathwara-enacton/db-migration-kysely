import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_collation")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("collname", "text", (col) => col.unique().notNull())
    .addColumn("collnamespace", "text", (col) => col.unique().notNull())
    .addColumn("collowner", "text", (col) => col.notNull())
    .addColumn("collprovider", "char", (col) => col.notNull())
    .addColumn("collisdeterministic", "boolean", (col) => col.notNull())
    .addColumn("collencoding", "integer", (col) => col.unique().notNull())
    .addColumn("collcollate", "text")
    .addColumn("collctype", "text")
    .addColumn("colliculocale", "text")
    .addColumn("collicurules", "text")
    .addColumn("collversion", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_collation").execute();
}