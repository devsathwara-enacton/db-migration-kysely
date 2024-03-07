import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("foreign_data_wrapper_options")
    .addColumn("foreign_data_wrapper_catalog", "text")
    .addColumn("foreign_data_wrapper_name", "text")
    .addColumn("option_name", "text")
    .addColumn("option_value", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("foreign_data_wrapper_options").execute();
}