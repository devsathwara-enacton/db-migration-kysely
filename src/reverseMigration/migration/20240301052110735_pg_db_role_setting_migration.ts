import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_db_role_setting")
    .addColumn("setdatabase", "text", (col) => col.primaryKey().notNull())
    .addColumn("setrole", "text", (col) => col.primaryKey().notNull())
    .addColumn("setconfig", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_db_role_setting").execute();
}