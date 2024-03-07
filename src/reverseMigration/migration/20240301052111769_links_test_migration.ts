import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("links_test")
    .addColumn("id", "text", (col) => col.primaryKey().notNull())
    .addColumn("user_id", "text", (col) => col.notNull())
    .addColumn("code", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("analytics_code", sql<any>`varchar`)
    .addColumn("slug", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("title", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("bio", "text")
    .addColumn("profile", sql<any>`varchar`)
    .addColumn("banner", sql<any>`varchar`)
    .addColumn("social_handles_location", sql<any>`varchar`, (col) => col.defaultTo(sql<any>`'top'::character varying`))
    .addColumn("is_enabled", "boolean", (col) => col.defaultTo(sql<any>`false`))
    .addColumn("is_archived", "int2", (col) => col.defaultTo(sql<any>`0`))
    .addColumn("template", sql<any>`varchar`)
    .addColumn("deleted_at", "timestamptz")
    .addColumn("created_at", "timestamptz", (col) => col.notNull().defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .addColumn("updated_at", "timestamptz", (col) => col.notNull().defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .addColumn("status", sql<any>`varchar`, (col) => col.notNull().defaultTo(sql<any>`'active'::character varying`))
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("links_test").execute();
}