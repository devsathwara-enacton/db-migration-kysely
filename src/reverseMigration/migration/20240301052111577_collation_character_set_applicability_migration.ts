import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("collation_character_set_applicability")
    .addColumn("collation_catalog", "text")
    .addColumn("collation_schema", "text")
    .addColumn("collation_name", "text")
    .addColumn("character_set_catalog", "text")
    .addColumn("character_set_schema", "text")
    .addColumn("character_set_name", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("collation_character_set_applicability").execute();
}