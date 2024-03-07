import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("column_udt_usage")
    .addColumn("udt_catalog", "text")
    .addColumn("udt_schema", "text")
    .addColumn("udt_name", "text")
    .addColumn("table_catalog", "text")
    .addColumn("table_schema", "text")
    .addColumn("table_name", "text")
    .addColumn("column_name", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("column_udt_usage").execute();
}