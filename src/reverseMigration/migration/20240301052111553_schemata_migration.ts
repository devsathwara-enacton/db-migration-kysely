import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("schemata")
    .addColumn("catalog_name", "text")
    .addColumn("schema_name", "text")
    .addColumn("schema_owner", "text")
    .addColumn("default_character_set_catalog", "text")
    .addColumn("default_character_set_schema", "text")
    .addColumn("default_character_set_name", "text")
    .addColumn("sql_path", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("schemata").execute();
}