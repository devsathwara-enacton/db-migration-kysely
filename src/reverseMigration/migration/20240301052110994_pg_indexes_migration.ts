import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_indexes")
    .addColumn("schemaname", "text")
    .addColumn("tablename", "text")
    .addColumn("indexname", "text")
    .addColumn("tablespace", "text")
    .addColumn("indexdef", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_indexes").execute();
}