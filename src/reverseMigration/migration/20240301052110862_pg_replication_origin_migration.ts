import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_replication_origin")
    .addColumn("roident", "text", (col) => col.primaryKey().notNull())
    .addColumn("roname", "text", (col) => col.unique().notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_replication_origin").execute();
}