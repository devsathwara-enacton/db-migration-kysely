import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("links")
    .addColumn("id", "text", (col) => col.unique().primaryKey().notNull())
    .addColumn("user_id", "text", (col) => col.notNull())
    .addColumn("code", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("analytics_code", sql<any>`varchar`, (col) => col.defaultTo(sql<any>`NULL::character varying`))
    .addColumn("slug", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("title", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("bio", "text")
    .addColumn("profile", sql<any>`varchar`, (col) => col.defaultTo(sql<any>`NULL::character varying`))
    .addColumn("banner", sql<any>`varchar`, (col) => col.defaultTo(sql<any>`NULL::character varying`))
    .addColumn("social_handles_location", sql<any>`varchar`, (col) => col.defaultTo(sql<any>`'top'::character varying`))
    .addColumn("is_enabled", "boolean", (col) => col.defaultTo(sql<any>`false`))
    .addColumn("is_archived", "int2", (col) => col.defaultTo(sql<any>`0`))
    .addColumn("template", sql<any>`varchar`, (col) => col.defaultTo(sql<any>`NULL::character varying`))
    .addColumn("deleted_at", "timestamptz")
    .addColumn("created_at", "timestamptz", (col) => col.notNull().defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .addColumn("updated_at", "timestamptz", (col) => col.notNull().defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .addColumn("status", sql<any>`varchar`, (col) => col.notNull().defaultTo(sql<any>`'active'::character varying`))
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("links").execute();
}