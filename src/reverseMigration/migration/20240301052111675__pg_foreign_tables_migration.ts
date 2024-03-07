import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("_pg_foreign_tables")
    .addColumn("foreign_table_catalog", "text")
    .addColumn("foreign_table_schema", "text")
    .addColumn("foreign_table_name", "text")
    .addColumn("ftoptions", "text")
    .addColumn("foreign_server_catalog", "text")
    .addColumn("foreign_server_name", "text")
    .addColumn("authorization_identifier", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("_pg_foreign_tables").execute();
}