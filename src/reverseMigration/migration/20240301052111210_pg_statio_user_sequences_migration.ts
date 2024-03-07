import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_statio_user_sequences")
    .addColumn("relid", "text")
    .addColumn("schemaname", "text")
    .addColumn("relname", "text")
    .addColumn("blks_read", "text")
    .addColumn("blks_hit", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_statio_user_sequences").execute();
}