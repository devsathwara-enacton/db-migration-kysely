import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("user")
    .addColumn("user_id", "uuid", (col) => col.primaryKey().notNull())
    .addColumn("username", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("password", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("role", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("created_at", "timestamptz", (col) => col.defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .addColumn("updated_at", "timestamptz")
    .addColumn("deleted_at", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("user").execute();
}