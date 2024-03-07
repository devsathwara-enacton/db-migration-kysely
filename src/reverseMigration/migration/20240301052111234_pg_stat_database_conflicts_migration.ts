import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_database_conflicts")
    .addColumn("datid", "text")
    .addColumn("datname", "text")
    .addColumn("confl_tablespace", "text")
    .addColumn("confl_lock", "text")
    .addColumn("confl_snapshot", "text")
    .addColumn("confl_bufferpin", "text")
    .addColumn("confl_deadlock", "text")
    .addColumn("confl_active_logicalslot", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_database_conflicts").execute();
}