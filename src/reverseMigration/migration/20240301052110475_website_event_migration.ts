import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("website_event")
    .addColumn("event_id", "uuid", (col) => col.primaryKey().notNull())
    .addColumn("website_id", "uuid", (col) => col.notNull())
    .addColumn("session_id", "uuid", (col) => col.notNull())
    .addColumn("created_at", "timestamptz", (col) => col.defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .addColumn("url_path", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("url_query", sql<any>`varchar`)
    .addColumn("referrer_path", sql<any>`varchar`)
    .addColumn("referrer_query", sql<any>`varchar`)
    .addColumn("referrer_domain", sql<any>`varchar`)
    .addColumn("page_title", sql<any>`varchar`)
    .addColumn("event_type", "integer", (col) => col.notNull().defaultTo(sql<any>`1`))
    .addColumn("event_name", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("website_event").execute();
}