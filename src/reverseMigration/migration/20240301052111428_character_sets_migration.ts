import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("character_sets")
    .addColumn("character_set_catalog", "text")
    .addColumn("character_set_schema", "text")
    .addColumn("character_set_name", "text")
    .addColumn("character_repertoire", "text")
    .addColumn("form_of_use", "text")
    .addColumn("default_collate_catalog", "text")
    .addColumn("default_collate_schema", "text")
    .addColumn("default_collate_name", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("character_sets").execute();
}