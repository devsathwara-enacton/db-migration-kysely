import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("event_data")
    .addColumn("event_data_id", "uuid", (col) => col.primaryKey().notNull())
    .addColumn("website_id", "uuid", (col) => col.notNull())
    .addColumn("website_event_id", "uuid", (col) => col.notNull())
    .addColumn("event_key", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("string_value", sql<any>`varchar`)
    .addColumn("number_value", "decimal")
    .addColumn("date_value", "timestamptz")
    .addColumn("data_type", "integer", (col) => col.notNull())
    .addColumn("created_at", "timestamptz", (col) => col.defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("event_data").execute();
}