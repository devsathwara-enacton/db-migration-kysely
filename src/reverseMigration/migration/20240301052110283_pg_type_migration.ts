import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_type")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("typname", "text", (col) => col.unique().notNull())
    .addColumn("typnamespace", "text", (col) => col.unique().notNull())
    .addColumn("typowner", "text", (col) => col.notNull())
    .addColumn("typlen", "int2", (col) => col.notNull())
    .addColumn("typbyval", "boolean", (col) => col.notNull())
    .addColumn("typtype", "char", (col) => col.notNull())
    .addColumn("typcategory", "char", (col) => col.notNull())
    .addColumn("typispreferred", "boolean", (col) => col.notNull())
    .addColumn("typisdefined", "boolean", (col) => col.notNull())
    .addColumn("typdelim", "char", (col) => col.notNull())
    .addColumn("typrelid", "text", (col) => col.notNull())
    .addColumn("typsubscript", "text", (col) => col.notNull())
    .addColumn("typelem", "text", (col) => col.notNull())
    .addColumn("typarray", "text", (col) => col.notNull())
    .addColumn("typinput", "text", (col) => col.notNull())
    .addColumn("typoutput", "text", (col) => col.notNull())
    .addColumn("typreceive", "text", (col) => col.notNull())
    .addColumn("typsend", "text", (col) => col.notNull())
    .addColumn("typmodin", "text", (col) => col.notNull())
    .addColumn("typmodout", "text", (col) => col.notNull())
    .addColumn("typanalyze", "text", (col) => col.notNull())
    .addColumn("typalign", "char", (col) => col.notNull())
    .addColumn("typstorage", "char", (col) => col.notNull())
    .addColumn("typnotnull", "boolean", (col) => col.notNull())
    .addColumn("typbasetype", "text", (col) => col.notNull())
    .addColumn("typtypmod", "integer", (col) => col.notNull())
    .addColumn("typndims", "integer", (col) => col.notNull())
    .addColumn("typcollation", "text", (col) => col.notNull())
    .addColumn("typdefaultbin", "text")
    .addColumn("typdefault", "text")
    .addColumn("typacl", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_type").execute();
}