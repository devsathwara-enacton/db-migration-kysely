import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("triggers")
    .addColumn("trigger_catalog", "text")
    .addColumn("trigger_schema", "text")
    .addColumn("trigger_name", "text")
    .addColumn("event_manipulation", sql<any>`varchar`)
    .addColumn("event_object_catalog", "text")
    .addColumn("event_object_schema", "text")
    .addColumn("event_object_table", "text")
    .addColumn("action_order", "integer")
    .addColumn("action_condition", sql<any>`varchar`)
    .addColumn("action_statement", sql<any>`varchar`)
    .addColumn("action_orientation", sql<any>`varchar`)
    .addColumn("action_timing", sql<any>`varchar`)
    .addColumn("action_reference_old_table", "text")
    .addColumn("action_reference_new_table", "text")
    .addColumn("action_reference_old_row", "text")
    .addColumn("action_reference_new_row", "text")
    .addColumn("created", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("triggers").execute();
}