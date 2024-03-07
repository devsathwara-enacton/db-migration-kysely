import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_replication_origin_status")
    .addColumn("local_id", "text")
    .addColumn("external_id", "text")
    .addColumn("remote_lsn", "text")
    .addColumn("local_lsn", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_replication_origin_status").execute();
}