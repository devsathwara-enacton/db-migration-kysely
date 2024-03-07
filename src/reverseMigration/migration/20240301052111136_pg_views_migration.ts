import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_views")
    .addColumn("schemaname", "text")
    .addColumn("viewname", "text")
    .addColumn("viewowner", "text")
    .addColumn("definition", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_views").execute();
}