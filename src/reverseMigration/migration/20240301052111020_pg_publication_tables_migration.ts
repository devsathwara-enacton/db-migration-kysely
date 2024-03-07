import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_publication_tables")
    .addColumn("pubname", "text")
    .addColumn("schemaname", "text")
    .addColumn("tablename", "text")
    .addColumn("attnames", "text")
    .addColumn("rowfilter", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_publication_tables").execute();
}