import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_progress_cluster")
    .addColumn("pid", "integer")
    .addColumn("datid", "text")
    .addColumn("datname", "text")
    .addColumn("relid", "text")
    .addColumn("command", "text")
    .addColumn("phase", "text")
    .addColumn("cluster_index_relid", "text")
    .addColumn("heap_tuples_scanned", "text")
    .addColumn("heap_tuples_written", "text")
    .addColumn("heap_blks_total", "text")
    .addColumn("heap_blks_scanned", "text")
    .addColumn("index_rebuild_count", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_progress_cluster").execute();
}