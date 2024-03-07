import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("foreign_tables")
    .addColumn("foreign_table_catalog", "text")
    .addColumn("foreign_table_schema", "text")
    .addColumn("foreign_table_name", "text")
    .addColumn("foreign_server_catalog", "text")
    .addColumn("foreign_server_name", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("foreign_tables").execute();
}