import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("schema_migrations")
    .addColumn("version", sql<any>`varchar`, (col) => col.primaryKey().notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("schema_migrations").execute();
}