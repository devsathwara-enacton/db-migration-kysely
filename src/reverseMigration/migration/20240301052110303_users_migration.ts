import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("users")
    .addColumn("instance_id", "uuid")
    .addColumn("id", "uuid", (col) => col.primaryKey().notNull())
    .addColumn("aud", sql<any>`varchar`)
    .addColumn("role", sql<any>`varchar`)
    .addColumn("email", sql<any>`varchar`)
    .addColumn("encrypted_password", sql<any>`varchar`)
    .addColumn("email_confirmed_at", "timestamptz")
    .addColumn("invited_at", "timestamptz")
    .addColumn("confirmation_token", sql<any>`varchar`)
    .addColumn("confirmation_sent_at", "timestamptz")
    .addColumn("recovery_token", sql<any>`varchar`)
    .addColumn("recovery_sent_at", "timestamptz")
    .addColumn("email_change_token_new", sql<any>`varchar`)
    .addColumn("email_change", sql<any>`varchar`)
    .addColumn("email_change_sent_at", "timestamptz")
    .addColumn("last_sign_in_at", "timestamptz")
    .addColumn("is_super_admin", "boolean")
    .addColumn("created_at", "timestamptz")
    .addColumn("updated_at", "timestamptz")
    .addColumn("phone", "text", (col) => col.unique().defaultTo(sql<any>`NULL::character varying`))
    .addColumn("phone_confirmed_at", "timestamptz")
    .addColumn("phone_change", "text", (col) => col.defaultTo(sql<any>`''::character varying`))
    .addColumn("phone_change_token", sql<any>`varchar`, (col) => col.defaultTo(sql<any>`''::character varying`))
    .addColumn("phone_change_sent_at", "timestamptz")
    .addColumn("confirmed_at", "timestamptz", (col) => col.autoIncrement())
    .addColumn("email_change_token_current", sql<any>`varchar`, (col) => col.defaultTo(sql<any>`''::character varying`))
    .addColumn("email_change_confirm_status", "int2", (col) => col.defaultTo(sql<any>`0`))
    .addColumn("banned_until", "timestamptz")
    .addColumn("reauthentication_token", sql<any>`varchar`, (col) => col.defaultTo(sql<any>`''::character varying`))
    .addColumn("reauthentication_sent_at", "timestamptz")
    .addColumn("is_sso_user", "boolean", (col) => col.notNull().defaultTo(sql<any>`false`))
    .addColumn("deleted_at", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("users").execute();
}