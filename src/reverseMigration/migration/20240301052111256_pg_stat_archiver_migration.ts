import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_archiver")
    .addColumn("archived_count", "text")
    .addColumn("last_archived_wal", "text")
    .addColumn("last_archived_time", "timestamptz")
    .addColumn("failed_count", "text")
    .addColumn("last_failed_wal", "text")
    .addColumn("last_failed_time", "timestamptz")
    .addColumn("stats_reset", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_archiver").execute();
}