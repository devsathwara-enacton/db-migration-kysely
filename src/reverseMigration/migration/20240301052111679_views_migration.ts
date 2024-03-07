import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("views")
    .addColumn("table_catalog", "text")
    .addColumn("table_schema", "text")
    .addColumn("table_name", "text")
    .addColumn("view_definition", sql<any>`varchar`)
    .addColumn("check_option", sql<any>`varchar`)
    .addColumn("is_updatable", sql<any>`varchar`)
    .addColumn("is_insertable_into", sql<any>`varchar`)
    .addColumn("is_trigger_updatable", sql<any>`varchar`)
    .addColumn("is_trigger_deletable", sql<any>`varchar`)
    .addColumn("is_trigger_insertable_into", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("views").execute();
}