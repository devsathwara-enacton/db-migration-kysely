import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("session_data")
    .addColumn("session_data_id", "uuid", (col) => col.primaryKey().notNull())
    .addColumn("website_id", "uuid", (col) => col.notNull())
    .addColumn("session_id", "uuid", (col) => col.notNull())
    .addColumn("session_key", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("string_value", sql<any>`varchar`)
    .addColumn("number_value", "decimal")
    .addColumn("date_value", "timestamptz")
    .addColumn("data_type", "integer", (col) => col.notNull())
    .addColumn("created_at", "timestamptz", (col) => col.defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .addColumn("deleted_at", "timestamptz", (col) => col.defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("session_data").execute();
}