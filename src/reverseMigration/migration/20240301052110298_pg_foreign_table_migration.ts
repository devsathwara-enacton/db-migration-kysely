import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_foreign_table")
    .addColumn("ftrelid", "text", (col) => col.primaryKey().notNull())
    .addColumn("ftserver", "text", (col) => col.notNull())
    .addColumn("ftoptions", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_foreign_table").execute();
}