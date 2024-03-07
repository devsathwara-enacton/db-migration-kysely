import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("migrations")
    .addColumn("id", "integer", (col) => col.primaryKey().notNull())
    .addColumn("name", sql<any>`varchar`, (col) => col.unique().notNull())
    .addColumn("hash", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("executed_at", "timestamp", (col) => col.defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("migrations").execute();
}