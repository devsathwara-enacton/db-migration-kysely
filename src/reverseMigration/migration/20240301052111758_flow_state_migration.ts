import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("flow_state")
    .addColumn("id", "uuid", (col) => col.primaryKey().notNull())
    .addColumn("user_id", "uuid")
    .addColumn("auth_code", "text", (col) => col.notNull())
    .addColumn("code_challenge_method", "text", (col) => col.notNull())
    .addColumn("code_challenge", "text", (col) => col.notNull())
    .addColumn("provider_type", "text", (col) => col.notNull())
    .addColumn("provider_access_token", "text")
    .addColumn("provider_refresh_token", "text")
    .addColumn("created_at", "timestamptz")
    .addColumn("updated_at", "timestamptz")
    .addColumn("authentication_method", "text", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("flow_state").execute();
}