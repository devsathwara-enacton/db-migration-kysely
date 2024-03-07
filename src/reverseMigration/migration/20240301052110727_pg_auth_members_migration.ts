import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_auth_members")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("roleid", "text", (col) => col.unique().unique().notNull())
    .addColumn("member", "text", (col) => col.unique().unique().notNull())
    .addColumn("grantor", "text", (col) => col.unique().unique().notNull())
    .addColumn("admin_option", "boolean", (col) => col.notNull())
    .addColumn("inherit_option", "boolean", (col) => col.notNull())
    .addColumn("set_option", "boolean", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_auth_members").execute();
}