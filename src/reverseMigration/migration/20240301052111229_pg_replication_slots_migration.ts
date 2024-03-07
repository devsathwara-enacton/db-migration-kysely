import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_replication_slots")
    .addColumn("slot_name", "text")
    .addColumn("plugin", "text")
    .addColumn("slot_type", "text")
    .addColumn("datoid", "text")
    .addColumn("database", "text")
    .addColumn("temporary", "boolean")
    .addColumn("active", "boolean")
    .addColumn("active_pid", "integer")
    .addColumn("xmin", "text")
    .addColumn("catalog_xmin", "text")
    .addColumn("restart_lsn", "text")
    .addColumn("confirmed_flush_lsn", "text")
    .addColumn("wal_status", "text")
    .addColumn("safe_wal_size", "text")
    .addColumn("two_phase", "boolean")
    .addColumn("conflicting", "boolean")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_replication_slots").execute();
}