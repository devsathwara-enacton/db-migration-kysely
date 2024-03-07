import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_subscription_stats")
    .addColumn("subid", "text")
    .addColumn("subname", "text")
    .addColumn("apply_error_count", "text")
    .addColumn("sync_error_count", "text")
    .addColumn("stats_reset", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_subscription_stats").execute();
}