import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_operator")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("oprname", "text", (col) => col.unique().notNull())
    .addColumn("oprnamespace", "text", (col) => col.unique().notNull())
    .addColumn("oprowner", "text", (col) => col.notNull())
    .addColumn("oprkind", "char", (col) => col.notNull())
    .addColumn("oprcanmerge", "boolean", (col) => col.notNull())
    .addColumn("oprcanhash", "boolean", (col) => col.notNull())
    .addColumn("oprleft", "text", (col) => col.unique().notNull())
    .addColumn("oprright", "text", (col) => col.unique().notNull())
    .addColumn("oprresult", "text", (col) => col.notNull())
    .addColumn("oprcom", "text", (col) => col.notNull())
    .addColumn("oprnegate", "text", (col) => col.notNull())
    .addColumn("oprcode", "text", (col) => col.notNull())
    .addColumn("oprrest", "text", (col) => col.notNull())
    .addColumn("oprjoin", "text", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_operator").execute();
}