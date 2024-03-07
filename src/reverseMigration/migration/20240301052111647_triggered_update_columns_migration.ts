import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("triggered_update_columns")
    .addColumn("trigger_catalog", "text")
    .addColumn("trigger_schema", "text")
    .addColumn("trigger_name", "text")
    .addColumn("event_object_catalog", "text")
    .addColumn("event_object_schema", "text")
    .addColumn("event_object_table", "text")
    .addColumn("event_object_column", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("triggered_update_columns").execute();
}