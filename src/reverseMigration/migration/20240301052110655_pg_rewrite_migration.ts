import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_rewrite")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("rulename", "text", (col) => col.unique().notNull())
    .addColumn("ev_class", "text", (col) => col.unique().notNull())
    .addColumn("ev_type", "char", (col) => col.notNull())
    .addColumn("ev_enabled", "char", (col) => col.notNull())
    .addColumn("is_instead", "boolean", (col) => col.notNull())
    .addColumn("ev_qual", "text", (col) => col.notNull())
    .addColumn("ev_action", "text", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_rewrite").execute();
}