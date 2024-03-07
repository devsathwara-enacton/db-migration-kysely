import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_tables")
    .addColumn("schemaname", "text")
    .addColumn("tablename", "text")
    .addColumn("tableowner", "text")
    .addColumn("tablespace", "text")
    .addColumn("hasindexes", "boolean")
    .addColumn("hasrules", "boolean")
    .addColumn("hastriggers", "boolean")
    .addColumn("rowsecurity", "boolean")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_tables").execute();
}