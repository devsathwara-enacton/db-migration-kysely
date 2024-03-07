import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("sso_providers")
    .addColumn("id", "uuid", (col) => col.primaryKey().notNull())
    .addColumn("resource_id", "text")
    .addColumn("created_at", "timestamptz")
    .addColumn("updated_at", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("sso_providers").execute();
}