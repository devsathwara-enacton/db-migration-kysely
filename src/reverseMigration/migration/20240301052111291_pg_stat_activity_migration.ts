import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_activity")
    .addColumn("datid", "text")
    .addColumn("datname", "text")
    .addColumn("pid", "integer")
    .addColumn("leader_pid", "integer")
    .addColumn("usesysid", "text")
    .addColumn("usename", "text")
    .addColumn("application_name", "text")
    .addColumn("client_addr", "text")
    .addColumn("client_hostname", "text")
    .addColumn("client_port", "integer")
    .addColumn("backend_start", "timestamptz")
    .addColumn("xact_start", "timestamptz")
    .addColumn("query_start", "timestamptz")
    .addColumn("state_change", "timestamptz")
    .addColumn("wait_event_type", "text")
    .addColumn("wait_event", "text")
    .addColumn("state", "text")
    .addColumn("backend_xid", "text")
    .addColumn("backend_xmin", "text")
    .addColumn("query_id", "text")
    .addColumn("query", "text")
    .addColumn("backend_type", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_activity").execute();
}