import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("foreign_servers")
    .addColumn("foreign_server_catalog", "text")
    .addColumn("foreign_server_name", "text")
    .addColumn("foreign_data_wrapper_catalog", "text")
    .addColumn("foreign_data_wrapper_name", "text")
    .addColumn("foreign_server_type", sql<any>`varchar`)
    .addColumn("foreign_server_version", sql<any>`varchar`)
    .addColumn("authorization_identifier", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("foreign_servers").execute();
}