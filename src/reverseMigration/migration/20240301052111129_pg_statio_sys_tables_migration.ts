import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_statio_sys_tables")
    .addColumn("relid", "text")
    .addColumn("schemaname", "text")
    .addColumn("relname", "text")
    .addColumn("heap_blks_read", "text")
    .addColumn("heap_blks_hit", "text")
    .addColumn("idx_blks_read", "text")
    .addColumn("idx_blks_hit", "text")
    .addColumn("toast_blks_read", "text")
    .addColumn("toast_blks_hit", "text")
    .addColumn("tidx_blks_read", "text")
    .addColumn("tidx_blks_hit", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_statio_sys_tables").execute();
}