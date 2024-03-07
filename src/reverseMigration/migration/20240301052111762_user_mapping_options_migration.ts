import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("user_mapping_options")
    .addColumn("authorization_identifier", "text")
    .addColumn("foreign_server_catalog", "text")
    .addColumn("foreign_server_name", "text")
    .addColumn("option_name", "text")
    .addColumn("option_value", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("user_mapping_options").execute();
}