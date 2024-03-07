import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("foreign_data_wrappers")
    .addColumn("foreign_data_wrapper_catalog", "text")
    .addColumn("foreign_data_wrapper_name", "text")
    .addColumn("authorization_identifier", "text")
    .addColumn("library_name", sql<any>`varchar`)
    .addColumn("foreign_data_wrapper_language", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("foreign_data_wrappers").execute();
}