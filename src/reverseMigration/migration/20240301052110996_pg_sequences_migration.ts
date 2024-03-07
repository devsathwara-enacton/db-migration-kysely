import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_sequences")
    .addColumn("schemaname", "text")
    .addColumn("sequencename", "text")
    .addColumn("sequenceowner", "text")
    .addColumn("data_type", "text")
    .addColumn("start_value", "text")
    .addColumn("min_value", "text")
    .addColumn("max_value", "text")
    .addColumn("increment_by", "text")
    .addColumn("cycle", "boolean")
    .addColumn("cache_size", "text")
    .addColumn("last_value", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_sequences").execute();
}