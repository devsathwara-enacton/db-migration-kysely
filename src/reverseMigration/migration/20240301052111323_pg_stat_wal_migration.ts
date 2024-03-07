import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_wal")
    .addColumn("wal_records", "text")
    .addColumn("wal_fpi", "text")
    .addColumn("wal_bytes", "decimal")
    .addColumn("wal_buffers_full", "text")
    .addColumn("wal_write", "text")
    .addColumn("wal_sync", "text")
    .addColumn("wal_write_time", "double")
    .addColumn("wal_sync_time", "double")
    .addColumn("stats_reset", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_wal").execute();
}