import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("session")
    .addColumn("session_id", "uuid", (col) => col.primaryKey().notNull())
    .addColumn("website_id", "uuid", (col) => col.notNull())
    .addColumn("hostname", sql<any>`varchar`)
    .addColumn("browser", sql<any>`varchar`)
    .addColumn("os", sql<any>`varchar`)
    .addColumn("device", sql<any>`varchar`)
    .addColumn("screen", sql<any>`varchar`)
    .addColumn("language", sql<any>`varchar`)
    .addColumn("country", "char")
    .addColumn("subdivision1", sql<any>`varchar`)
    .addColumn("subdivision2", sql<any>`varchar`)
    .addColumn("city", sql<any>`varchar`)
    .addColumn("created_at", "timestamptz", (col) => col.defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("session").execute();
}