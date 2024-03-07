import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_file_settings")
    .addColumn("sourcefile", "text")
    .addColumn("sourceline", "integer")
    .addColumn("seqno", "integer")
    .addColumn("name", "text")
    .addColumn("setting", "text")
    .addColumn("applied", "boolean")
    .addColumn("error", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_file_settings").execute();
}