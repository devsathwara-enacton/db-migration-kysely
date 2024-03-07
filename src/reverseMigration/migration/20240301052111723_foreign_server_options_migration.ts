import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("foreign_server_options")
    .addColumn("foreign_server_catalog", "text")
    .addColumn("foreign_server_name", "text")
    .addColumn("option_name", "text")
    .addColumn("option_value", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("foreign_server_options").execute();
}