import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("report")
    .addColumn("report_id", "uuid", (col) => col.primaryKey().notNull())
    .addColumn("user_id", "uuid", (col) => col.notNull())
    .addColumn("website_id", "uuid", (col) => col.notNull())
    .addColumn("type", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("name", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("description", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("parameters", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("created_at", "timestamptz", (col) => col.defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .addColumn("updated_at", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("report").execute();
}