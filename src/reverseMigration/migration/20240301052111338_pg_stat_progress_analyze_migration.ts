import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_progress_analyze")
    .addColumn("pid", "integer")
    .addColumn("datid", "text")
    .addColumn("datname", "text")
    .addColumn("relid", "text")
    .addColumn("phase", "text")
    .addColumn("sample_blks_total", "text")
    .addColumn("sample_blks_scanned", "text")
    .addColumn("ext_stats_total", "text")
    .addColumn("ext_stats_computed", "text")
    .addColumn("child_tables_total", "text")
    .addColumn("child_tables_done", "text")
    .addColumn("current_child_table_relid", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_progress_analyze").execute();
}