import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_timezone_abbrevs")
    .addColumn("abbrev", "text")
    .addColumn("utc_offset", "text")
    .addColumn("is_dst", "boolean")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_timezone_abbrevs").execute();
}