import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_rules")
    .addColumn("schemaname", "text")
    .addColumn("tablename", "text")
    .addColumn("rulename", "text")
    .addColumn("definition", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_rules").execute();
}