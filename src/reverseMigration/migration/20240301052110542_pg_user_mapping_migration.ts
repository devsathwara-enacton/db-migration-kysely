import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_user_mapping")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("umuser", "text", (col) => col.unique().notNull())
    .addColumn("umserver", "text", (col) => col.unique().notNull())
    .addColumn("umoptions", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_user_mapping").execute();
}