import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_all_indexes")
    .addColumn("relid", "text")
    .addColumn("indexrelid", "text")
    .addColumn("schemaname", "text")
    .addColumn("relname", "text")
    .addColumn("indexrelname", "text")
    .addColumn("idx_scan", "text")
    .addColumn("last_idx_scan", "timestamptz")
    .addColumn("idx_tup_read", "text")
    .addColumn("idx_tup_fetch", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_all_indexes").execute();
}