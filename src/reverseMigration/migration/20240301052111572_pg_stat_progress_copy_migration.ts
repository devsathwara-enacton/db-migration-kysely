import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_progress_copy")
    .addColumn("pid", "integer")
    .addColumn("datid", "text")
    .addColumn("datname", "text")
    .addColumn("relid", "text")
    .addColumn("command", "text")
    .addColumn("type", "text")
    .addColumn("bytes_processed", "text")
    .addColumn("bytes_total", "text")
    .addColumn("tuples_processed", "text")
    .addColumn("tuples_excluded", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_progress_copy").execute();
}