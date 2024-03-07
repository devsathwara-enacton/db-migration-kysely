import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_subscription")
    .addColumn("subid", "text")
    .addColumn("subname", "text")
    .addColumn("pid", "integer")
    .addColumn("leader_pid", "integer")
    .addColumn("relid", "text")
    .addColumn("received_lsn", "text")
    .addColumn("last_msg_send_time", "timestamptz")
    .addColumn("last_msg_receipt_time", "timestamptz")
    .addColumn("latest_end_lsn", "text")
    .addColumn("latest_end_time", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_subscription").execute();
}