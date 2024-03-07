import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_slru")
    .addColumn("name", "text")
    .addColumn("blks_zeroed", "text")
    .addColumn("blks_hit", "text")
    .addColumn("blks_read", "text")
    .addColumn("blks_written", "text")
    .addColumn("blks_exists", "text")
    .addColumn("flushes", "text")
    .addColumn("truncates", "text")
    .addColumn("stats_reset", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_slru").execute();
}