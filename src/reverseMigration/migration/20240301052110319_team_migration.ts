import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("team")
    .addColumn("team_id", "uuid", (col) => col.primaryKey().notNull())
    .addColumn("name", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("access_code", sql<any>`varchar`)
    .addColumn("created_at", "timestamptz", (col) => col.defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .addColumn("updated_at", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("team").execute();
}