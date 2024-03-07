import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_wal_receiver")
    .addColumn("pid", "integer")
    .addColumn("status", "text")
    .addColumn("receive_start_lsn", "text")
    .addColumn("receive_start_tli", "integer")
    .addColumn("written_lsn", "text")
    .addColumn("flushed_lsn", "text")
    .addColumn("received_tli", "integer")
    .addColumn("last_msg_send_time", "timestamptz")
    .addColumn("last_msg_receipt_time", "timestamptz")
    .addColumn("latest_end_lsn", "text")
    .addColumn("latest_end_time", "timestamptz")
    .addColumn("slot_name", "text")
    .addColumn("sender_host", "text")
    .addColumn("sender_port", "integer")
    .addColumn("conninfo", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_wal_receiver").execute();
}