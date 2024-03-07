import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_foreign_data_wrapper")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("fdwname", "text", (col) => col.unique().notNull())
    .addColumn("fdwowner", "text", (col) => col.notNull())
    .addColumn("fdwhandler", "text", (col) => col.notNull())
    .addColumn("fdwvalidator", "text", (col) => col.notNull())
    .addColumn("fdwacl", "text")
    .addColumn("fdwoptions", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_foreign_data_wrapper").execute();
}