import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_xact_user_tables")
    .addColumn("relid", "text")
    .addColumn("schemaname", "text")
    .addColumn("relname", "text")
    .addColumn("seq_scan", "text")
    .addColumn("seq_tup_read", "text")
    .addColumn("idx_scan", "text")
    .addColumn("idx_tup_fetch", "text")
    .addColumn("n_tup_ins", "text")
    .addColumn("n_tup_upd", "text")
    .addColumn("n_tup_del", "text")
    .addColumn("n_tup_hot_upd", "text")
    .addColumn("n_tup_newpage_upd", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_xact_user_tables").execute();
}