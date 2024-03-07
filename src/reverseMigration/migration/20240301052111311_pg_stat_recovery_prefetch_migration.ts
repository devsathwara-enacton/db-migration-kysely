import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_recovery_prefetch")
    .addColumn("stats_reset", "timestamptz")
    .addColumn("prefetch", "text")
    .addColumn("hit", "text")
    .addColumn("skip_init", "text")
    .addColumn("skip_new", "text")
    .addColumn("skip_fpw", "text")
    .addColumn("skip_rep", "text")
    .addColumn("wal_distance", "integer")
    .addColumn("block_distance", "integer")
    .addColumn("io_depth", "integer")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_recovery_prefetch").execute();
}