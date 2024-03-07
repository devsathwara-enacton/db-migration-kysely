import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_hba_file_rules")
    .addColumn("rule_number", "integer")
    .addColumn("file_name", "text")
    .addColumn("line_number", "integer")
    .addColumn("type", "text")
    .addColumn("database", "text")
    .addColumn("user_name", "text")
    .addColumn("address", "text")
    .addColumn("netmask", "text")
    .addColumn("auth_method", "text")
    .addColumn("options", "text")
    .addColumn("error", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_hba_file_rules").execute();
}