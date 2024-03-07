import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_progress_basebackup")
    .addColumn("pid", "integer")
    .addColumn("phase", "text")
    .addColumn("backup_total", "text")
    .addColumn("backup_streamed", "text")
    .addColumn("tablespaces_total", "text")
    .addColumn("tablespaces_streamed", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_progress_basebackup").execute();
}