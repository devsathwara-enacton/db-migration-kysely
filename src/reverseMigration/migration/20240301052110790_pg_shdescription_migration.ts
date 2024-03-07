import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_shdescription")
    .addColumn("objoid", "text", (col) => col.primaryKey().notNull())
    .addColumn("classoid", "text", (col) => col.primaryKey().notNull())
    .addColumn("description", "text", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_shdescription").execute();
}