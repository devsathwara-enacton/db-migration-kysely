import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_all_tables")
    .addColumn("relid", "text")
    .addColumn("schemaname", "text")
    .addColumn("relname", "text")
    .addColumn("seq_scan", "text")
    .addColumn("last_seq_scan", "timestamptz")
    .addColumn("seq_tup_read", "text")
    .addColumn("idx_scan", "text")
    .addColumn("last_idx_scan", "timestamptz")
    .addColumn("idx_tup_fetch", "text")
    .addColumn("n_tup_ins", "text")
    .addColumn("n_tup_upd", "text")
    .addColumn("n_tup_del", "text")
    .addColumn("n_tup_hot_upd", "text")
    .addColumn("n_tup_newpage_upd", "text")
    .addColumn("n_live_tup", "text")
    .addColumn("n_dead_tup", "text")
    .addColumn("n_mod_since_analyze", "text")
    .addColumn("n_ins_since_vacuum", "text")
    .addColumn("last_vacuum", "timestamptz")
    .addColumn("last_autovacuum", "timestamptz")
    .addColumn("last_analyze", "timestamptz")
    .addColumn("last_autoanalyze", "timestamptz")
    .addColumn("vacuum_count", "text")
    .addColumn("autovacuum_count", "text")
    .addColumn("analyze_count", "text")
    .addColumn("autoanalyze_count", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_all_tables").execute();
}