import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_replication_slots")
    .addColumn("slot_name", "text")
    .addColumn("spill_txns", "text")
    .addColumn("spill_count", "text")
    .addColumn("spill_bytes", "text")
    .addColumn("stream_txns", "text")
    .addColumn("stream_count", "text")
    .addColumn("stream_bytes", "text")
    .addColumn("total_txns", "text")
    .addColumn("total_bytes", "text")
    .addColumn("stats_reset", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_replication_slots").execute();
}