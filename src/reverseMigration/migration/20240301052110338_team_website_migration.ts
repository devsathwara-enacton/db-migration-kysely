import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("team_website")
    .addColumn("team_website_id", "uuid", (col) => col.primaryKey().notNull())
    .addColumn("team_id", "uuid", (col) => col.notNull())
    .addColumn("website_id", "uuid", (col) => col.notNull())
    .addColumn("created_at", "timestamptz", (col) => col.defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("team_website").execute();
}