import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("_pg_user_mappings")
    .addColumn("oid", "text")
    .addColumn("umoptions", "text")
    .addColumn("umuser", "text")
    .addColumn("authorization_identifier", "text")
    .addColumn("foreign_server_catalog", "text")
    .addColumn("foreign_server_name", "text")
    .addColumn("srvowner", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("_pg_user_mappings").execute();
}