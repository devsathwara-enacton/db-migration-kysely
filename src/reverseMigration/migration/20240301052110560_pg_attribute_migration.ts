import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_attribute")
    .addColumn("attrelid", "text", (col) => col.unique().primaryKey().notNull())
    .addColumn("attname", "text", (col) => col.unique().notNull())
    .addColumn("atttypid", "text", (col) => col.notNull())
    .addColumn("attlen", "int2", (col) => col.notNull())
    .addColumn("attnum", "int2", (col) => col.primaryKey().notNull())
    .addColumn("attcacheoff", "integer", (col) => col.notNull())
    .addColumn("atttypmod", "integer", (col) => col.notNull())
    .addColumn("attndims", "int2", (col) => col.notNull())
    .addColumn("attbyval", "boolean", (col) => col.notNull())
    .addColumn("attalign", "char", (col) => col.notNull())
    .addColumn("attstorage", "char", (col) => col.notNull())
    .addColumn("attcompression", "char", (col) => col.notNull())
    .addColumn("attnotnull", "boolean", (col) => col.notNull())
    .addColumn("atthasdef", "boolean", (col) => col.notNull())
    .addColumn("atthasmissing", "boolean", (col) => col.notNull())
    .addColumn("attidentity", "char", (col) => col.notNull())
    .addColumn("attgenerated", "char", (col) => col.notNull())
    .addColumn("attisdropped", "boolean", (col) => col.notNull())
    .addColumn("attislocal", "boolean", (col) => col.notNull())
    .addColumn("attinhcount", "int2", (col) => col.notNull())
    .addColumn("attstattarget", "int2", (col) => col.notNull())
    .addColumn("attcollation", "text", (col) => col.notNull())
    .addColumn("attacl", "text")
    .addColumn("attoptions", "text")
    .addColumn("attfdwoptions", "text")
    .addColumn("attmissingval", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_attribute").execute();
}