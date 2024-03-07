import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_progress_create_index")
    .addColumn("pid", "integer")
    .addColumn("datid", "text")
    .addColumn("datname", "text")
    .addColumn("relid", "text")
    .addColumn("index_relid", "text")
    .addColumn("command", "text")
    .addColumn("phase", "text")
    .addColumn("lockers_total", "text")
    .addColumn("lockers_done", "text")
    .addColumn("current_locker_pid", "text")
    .addColumn("blocks_total", "text")
    .addColumn("blocks_done", "text")
    .addColumn("tuples_total", "text")
    .addColumn("tuples_done", "text")
    .addColumn("partitions_total", "text")
    .addColumn("partitions_done", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_progress_create_index").execute();
}