import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_ident_file_mappings")
    .addColumn("map_number", "integer")
    .addColumn("file_name", "text")
    .addColumn("line_number", "integer")
    .addColumn("map_name", "text")
    .addColumn("sys_name", "text")
    .addColumn("pg_username", "text")
    .addColumn("error", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_ident_file_mappings").execute();
}