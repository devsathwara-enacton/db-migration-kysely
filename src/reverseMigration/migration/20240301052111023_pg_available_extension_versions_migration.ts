import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_available_extension_versions")
    .addColumn("name", "text")
    .addColumn("version", "text")
    .addColumn("installed", "boolean")
    .addColumn("superuser", "boolean")
    .addColumn("trusted", "boolean")
    .addColumn("relocatable", "boolean")
    .addColumn("schema", "text")
    .addColumn("requires", "text")
    .addColumn("comment", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_available_extension_versions").execute();
}