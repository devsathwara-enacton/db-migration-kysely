import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_matviews")
    .addColumn("schemaname", "text")
    .addColumn("matviewname", "text")
    .addColumn("matviewowner", "text")
    .addColumn("tablespace", "text")
    .addColumn("hasindexes", "boolean")
    .addColumn("ispopulated", "boolean")
    .addColumn("definition", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_matviews").execute();
}