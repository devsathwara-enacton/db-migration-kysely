import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("users")
    .addColumn("id", "integer", (col) => col.primaryKey().notNull().defaultTo(sql<any>`nextval('users_id_seq'::regclass)`))
    .addColumn("name", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("email", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("password", sql<any>`varchar`, (col) => col.notNull())
    .addColumn("referral_code", sql<any>`varchar`)
    .addColumn("referred_by", "text")
    .addColumn("provider_type", sql<any>`varchar`)
    .addColumn("provider_id", sql<any>`varchar`)
    .addColumn("subscription_id", sql<any>`varchar`)
    .addColumn("subscription_status", sql<any>`varchar`, (col) => col.defaultTo(sql<any>`'trial'::character varying`))
    .addColumn("subscription_plan", sql<any>`varchar`)
    .addColumn("subscription_start_date", "timestamptz")
    .addColumn("subscription_trial_ends_at", "timestamptz")
    .addColumn("status", sql<any>`varchar`, (col) => col.defaultTo(sql<any>`'active'::character varying`))
    .addColumn("role", sql<any>`varchar`, (col) => col.defaultTo(sql<any>`'user'::character varying`))
    .addColumn("rememberme_token", sql<any>`varchar`)
    .addColumn("supabase_user_id", sql<any>`varchar`)
    .addColumn("signup_ip", sql<any>`varchar`)
    .addColumn("signup_ua", sql<any>`varchar`)
    .addColumn("signup_secret", sql<any>`varchar`)
    .addColumn("created_at", "timestamptz", (col) => col.defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .addColumn("updated_at", "timestamptz", (col) => col.defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .addColumn("is_verified", "boolean", (col) => col.defaultTo(sql<any>`false`))
    .addColumn("is_deleted", "boolean", (col) => col.notNull().defaultTo(sql<any>`false`))
    .addColumn("deleted_at", "timestamp")
    .addColumn("stripe_customer_id", sql<any>`varchar`)
    .addColumn("subscription_end_date", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("users").execute();
}