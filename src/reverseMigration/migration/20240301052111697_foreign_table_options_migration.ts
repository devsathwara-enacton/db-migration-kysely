import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("foreign_table_options")
    .addColumn("foreign_table_catalog", "text")
    .addColumn("foreign_table_schema", "text")
    .addColumn("foreign_table_name", "text")
    .addColumn("option_name", "text")
    .addColumn("option_value", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("foreign_table_options").execute();
}