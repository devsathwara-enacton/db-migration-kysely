import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("_prisma_migrations")
    .addColumn("id", sql<any>`varchar`, (col) => col.primaryKey().notNull())
    .addColumn("checksum", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("finished_at", "timestamptz")
    .addColumn("migration_name", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("logs", "text")
    .addColumn("rolled_back_at", "timestamptz")
    .addColumn("started_at", "timestamptz", (col) => col.notNull().defaultTo(sql<any>`now()`))
    .addColumn("applied_steps_count", "integer", (col) => col.notNull().defaultTo(sql<any>`0`))
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("_prisma_migrations").execute();
}