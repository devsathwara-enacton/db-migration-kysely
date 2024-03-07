import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_authid")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("rolname", "text", (col) => col.unique().notNull())
    .addColumn("rolsuper", "boolean", (col) => col.notNull())
    .addColumn("rolinherit", "boolean", (col) => col.notNull())
    .addColumn("rolcreaterole", "boolean", (col) => col.notNull())
    .addColumn("rolcreatedb", "boolean", (col) => col.notNull())
    .addColumn("rolcanlogin", "boolean", (col) => col.notNull())
    .addColumn("rolreplication", "boolean", (col) => col.notNull())
    .addColumn("rolbypassrls", "boolean", (col) => col.notNull())
    .addColumn("rolconnlimit", "integer", (col) => col.notNull())
    .addColumn("rolpassword", "text")
    .addColumn("rolvaliduntil", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_authid").execute();
}