import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("sso_domains")
    .addColumn("id", "uuid", (col) => col.primaryKey().notNull())
    .addColumn("sso_provider_id", "uuid", (col) => col.notNull())
    .addColumn("domain", "text", (col) => col.notNull())
    .addColumn("created_at", "timestamptz")
    .addColumn("updated_at", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("sso_domains").execute();
}