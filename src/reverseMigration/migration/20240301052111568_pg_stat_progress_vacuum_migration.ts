import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_progress_vacuum")
    .addColumn("pid", "integer")
    .addColumn("datid", "text")
    .addColumn("datname", "text")
    .addColumn("relid", "text")
    .addColumn("phase", "text")
    .addColumn("heap_blks_total", "text")
    .addColumn("heap_blks_scanned", "text")
    .addColumn("heap_blks_vacuumed", "text")
    .addColumn("index_vacuum_count", "text")
    .addColumn("max_dead_tuples", "text")
    .addColumn("num_dead_tuples", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_progress_vacuum").execute();
}