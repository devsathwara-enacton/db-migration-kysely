import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_ssl")
    .addColumn("pid", "integer")
    .addColumn("ssl", "boolean")
    .addColumn("version", "text")
    .addColumn("cipher", "text")
    .addColumn("bits", "integer")
    .addColumn("client_dn", "text")
    .addColumn("client_serial", "decimal")
    .addColumn("issuer_dn", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_ssl").execute();
}