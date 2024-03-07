import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_settings")
    .addColumn("name", "text")
    .addColumn("setting", "text")
    .addColumn("unit", "text")
    .addColumn("category", "text")
    .addColumn("short_desc", "text")
    .addColumn("extra_desc", "text")
    .addColumn("context", "text")
    .addColumn("vartype", "text")
    .addColumn("source", "text")
    .addColumn("min_val", "text")
    .addColumn("max_val", "text")
    .addColumn("enumvals", "text")
    .addColumn("boot_val", "text")
    .addColumn("reset_val", "text")
    .addColumn("sourcefile", "text")
    .addColumn("sourceline", "integer")
    .addColumn("pending_restart", "boolean")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_settings").execute();
}