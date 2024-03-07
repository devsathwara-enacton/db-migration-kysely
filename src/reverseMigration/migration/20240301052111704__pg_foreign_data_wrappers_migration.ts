import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("_pg_foreign_data_wrappers")
    .addColumn("oid", "text")
    .addColumn("fdwowner", "text")
    .addColumn("fdwoptions", "text")
    .addColumn("foreign_data_wrapper_catalog", "text")
    .addColumn("foreign_data_wrapper_name", "text")
    .addColumn("authorization_identifier", "text")
    .addColumn("foreign_data_wrapper_language", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("_pg_foreign_data_wrappers").execute();
}