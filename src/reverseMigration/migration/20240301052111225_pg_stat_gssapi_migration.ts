import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_gssapi")
    .addColumn("pid", "integer")
    .addColumn("gss_authenticated", "boolean")
    .addColumn("principal", "text")
    .addColumn("encrypted", "boolean")
    .addColumn("credentials_delegated", "boolean")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_gssapi").execute();
}