import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_statio_user_indexes")
    .addColumn("relid", "text")
    .addColumn("indexrelid", "text")
    .addColumn("schemaname", "text")
    .addColumn("relname", "text")
    .addColumn("indexrelname", "text")
    .addColumn("idx_blks_read", "text")
    .addColumn("idx_blks_hit", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_statio_user_indexes").execute();
}