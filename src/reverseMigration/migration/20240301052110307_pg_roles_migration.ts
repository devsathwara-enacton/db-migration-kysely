import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_roles")
    .addColumn("rolname", "text")
    .addColumn("rolsuper", "boolean")
    .addColumn("rolinherit", "boolean")
    .addColumn("rolcreaterole", "boolean")
    .addColumn("rolcreatedb", "boolean")
    .addColumn("rolcanlogin", "boolean")
    .addColumn("rolreplication", "boolean")
    .addColumn("rolconnlimit", "integer")
    .addColumn("rolpassword", "text")
    .addColumn("rolvaliduntil", "timestamptz")
    .addColumn("rolbypassrls", "boolean")
    .addColumn("rolconfig", "text")
    .addColumn("oid", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_roles").execute();
}