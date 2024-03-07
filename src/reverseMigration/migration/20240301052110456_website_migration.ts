import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("website")
    .addColumn("website_id", "uuid", (col) => col.primaryKey().notNull())
    .addColumn("name", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("domain", sql<any>`varchar`)
    .addColumn("share_id", sql<any>`varchar`)
    .addColumn("reset_at", "timestamptz")
    .addColumn("user_id", "uuid")
    .addColumn("created_at", "timestamptz", (col) => col.defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .addColumn("updated_at", "timestamptz")
    .addColumn("deleted_at", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("website").execute();
}