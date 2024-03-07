import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("saml_providers")
    .addColumn("id", "uuid", (col) => col.primaryKey().notNull())
    .addColumn("sso_provider_id", "uuid", (col) => col.notNull())
    .addColumn("entity_id", "text", (col) => col.unique().notNull())
    .addColumn("metadata_xml", "text", (col) => col.notNull())
    .addColumn("metadata_url", "text")
    .addColumn("created_at", "timestamptz")
    .addColumn("updated_at", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("saml_providers").execute();
}