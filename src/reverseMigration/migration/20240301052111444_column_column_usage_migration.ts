import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("column_column_usage")
    .addColumn("table_catalog", "text")
    .addColumn("table_schema", "text")
    .addColumn("table_name", "text")
    .addColumn("column_name", "text")
    .addColumn("dependent_column", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("column_column_usage").execute();
}