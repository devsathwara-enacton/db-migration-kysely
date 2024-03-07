import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("key_column_usage")
    .addColumn("constraint_catalog", "text")
    .addColumn("constraint_schema", "text")
    .addColumn("constraint_name", "text")
    .addColumn("table_catalog", "text")
    .addColumn("table_schema", "text")
    .addColumn("table_name", "text")
    .addColumn("column_name", "text")
    .addColumn("ordinal_position", "integer")
    .addColumn("position_in_unique_constraint", "integer")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("key_column_usage").execute();
}