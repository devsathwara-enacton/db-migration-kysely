import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_database")
    .addColumn("datid", "text")
    .addColumn("datname", "text")
    .addColumn("numbackends", "integer")
    .addColumn("xact_commit", "text")
    .addColumn("xact_rollback", "text")
    .addColumn("blks_read", "text")
    .addColumn("blks_hit", "text")
    .addColumn("tup_returned", "text")
    .addColumn("tup_fetched", "text")
    .addColumn("tup_inserted", "text")
    .addColumn("tup_updated", "text")
    .addColumn("tup_deleted", "text")
    .addColumn("conflicts", "text")
    .addColumn("temp_files", "text")
    .addColumn("temp_bytes", "text")
    .addColumn("deadlocks", "text")
    .addColumn("checksum_failures", "text")
    .addColumn("checksum_last_failure", "timestamptz")
    .addColumn("blk_read_time", "double")
    .addColumn("blk_write_time", "double")
    .addColumn("session_time", "double")
    .addColumn("active_time", "double")
    .addColumn("idle_in_transaction_time", "double")
    .addColumn("sessions", "text")
    .addColumn("sessions_abandoned", "text")
    .addColumn("sessions_fatal", "text")
    .addColumn("sessions_killed", "text")
    .addColumn("stats_reset", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_database").execute();
}