import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_seclabel")
    .addColumn("objoid", "text", (col) => col.primaryKey().notNull())
    .addColumn("classoid", "text", (col) => col.primaryKey().notNull())
    .addColumn("objsubid", "integer", (col) => col.primaryKey().notNull())
    .addColumn("provider", "text", (col) => col.primaryKey().notNull())
    .addColumn("label", "text", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_seclabel").execute();
}