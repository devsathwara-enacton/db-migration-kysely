import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("tables")
    .addColumn("table_catalog", "text")
    .addColumn("table_schema", "text")
    .addColumn("table_name", "text")
    .addColumn("table_type", sql<any>`varchar`)
    .addColumn("self_referencing_column_name", "text")
    .addColumn("reference_generation", sql<any>`varchar`)
    .addColumn("user_defined_type_catalog", "text")
    .addColumn("user_defined_type_schema", "text")
    .addColumn("user_defined_type_name", "text")
    .addColumn("is_insertable_into", sql<any>`varchar`)
    .addColumn("is_typed", sql<any>`varchar`)
    .addColumn("commit_action", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("tables").execute();
}