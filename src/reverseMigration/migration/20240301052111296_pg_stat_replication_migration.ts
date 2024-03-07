import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_replication")
    .addColumn("pid", "integer")
    .addColumn("usesysid", "text")
    .addColumn("usename", "text")
    .addColumn("application_name", "text")
    .addColumn("client_addr", "text")
    .addColumn("client_hostname", "text")
    .addColumn("client_port", "integer")
    .addColumn("backend_start", "timestamptz")
    .addColumn("backend_xmin", "text")
    .addColumn("state", "text")
    .addColumn("sent_lsn", "text")
    .addColumn("write_lsn", "text")
    .addColumn("flush_lsn", "text")
    .addColumn("replay_lsn", "text")
    .addColumn("write_lag", "text")
    .addColumn("flush_lag", "text")
    .addColumn("replay_lag", "text")
    .addColumn("sync_priority", "integer")
    .addColumn("sync_state", "text")
    .addColumn("reply_time", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_replication").execute();
}