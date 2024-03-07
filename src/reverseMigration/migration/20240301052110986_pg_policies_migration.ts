import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_policies")
    .addColumn("schemaname", "text")
    .addColumn("tablename", "text")
    .addColumn("policyname", "text")
    .addColumn("permissive", "text")
    .addColumn("roles", "text")
    .addColumn("cmd", "text")
    .addColumn("qual", "text")
    .addColumn("with_check", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_policies").execute();
}