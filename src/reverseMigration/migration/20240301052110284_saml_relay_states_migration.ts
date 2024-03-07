import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("saml_relay_states")
    .addColumn("id", "uuid", (col) => col.primaryKey().notNull())
    .addColumn("sso_provider_id", "uuid", (col) => col.notNull())
    .addColumn("request_id", "text", (col) => col.notNull())
    .addColumn("for_email", "text")
    .addColumn("redirect_to", "text")
    .addColumn("from_ip_address", "text")
    .addColumn("created_at", "timestamptz")
    .addColumn("updated_at", "timestamptz")
    .addColumn("flow_state_id", "uuid")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("saml_relay_states").execute();
}