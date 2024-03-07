import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_available_extensions")
    .addColumn("name", "text")
    .addColumn("default_version", "text")
    .addColumn("installed_version", "text")
    .addColumn("comment", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_available_extensions").execute();
}