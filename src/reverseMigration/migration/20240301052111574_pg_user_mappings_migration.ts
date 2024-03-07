import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_user_mappings")
    .addColumn("umid", "text")
    .addColumn("srvid", "text")
    .addColumn("srvname", "text")
    .addColumn("umuser", "text")
    .addColumn("usename", "text")
    .addColumn("umoptions", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_user_mappings").execute();
}