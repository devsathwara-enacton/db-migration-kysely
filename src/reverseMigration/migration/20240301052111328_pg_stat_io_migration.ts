import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_io")
    .addColumn("backend_type", "text")
    .addColumn("object", "text")
    .addColumn("context", "text")
    .addColumn("reads", "text")
    .addColumn("read_time", "double")
    .addColumn("writes", "text")
    .addColumn("write_time", "double")
    .addColumn("writebacks", "text")
    .addColumn("writeback_time", "double")
    .addColumn("extends", "text")
    .addColumn("extend_time", "double")
    .addColumn("op_bytes", "text")
    .addColumn("hits", "text")
    .addColumn("evictions", "text")
    .addColumn("reuses", "text")
    .addColumn("fsyncs", "text")
    .addColumn("fsync_time", "double")
    .addColumn("stats_reset", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_io").execute();
}