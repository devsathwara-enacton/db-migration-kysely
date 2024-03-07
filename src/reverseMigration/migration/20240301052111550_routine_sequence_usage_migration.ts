import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("routine_sequence_usage")
    .addColumn("specific_catalog", "text")
    .addColumn("specific_schema", "text")
    .addColumn("specific_name", "text")
    .addColumn("routine_catalog", "text")
    .addColumn("routine_schema", "text")
    .addColumn("routine_name", "text")
    .addColumn("sequence_catalog", "text")
    .addColumn("sequence_schema", "text")
    .addColumn("sequence_name", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("routine_sequence_usage").execute();
}