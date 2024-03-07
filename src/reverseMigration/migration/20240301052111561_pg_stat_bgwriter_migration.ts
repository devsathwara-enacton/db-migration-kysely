import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_bgwriter")
    .addColumn("checkpoints_timed", "text")
    .addColumn("checkpoints_req", "text")
    .addColumn("checkpoint_write_time", "double")
    .addColumn("checkpoint_sync_time", "double")
    .addColumn("buffers_checkpoint", "text")
    .addColumn("buffers_clean", "text")
    .addColumn("maxwritten_clean", "text")
    .addColumn("buffers_backend", "text")
    .addColumn("buffers_backend_fsync", "text")
    .addColumn("buffers_alloc", "text")
    .addColumn("stats_reset", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_bgwriter").execute();
}