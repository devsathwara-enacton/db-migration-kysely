import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("subscriptions")
    .addColumn("id", "integer", (col) => col.primaryKey().notNull().defaultTo(sql<any>`nextval('subscriptions_id_seq'::regclass)`))
    .addColumn("user_id", "integer")
    .addColumn("subscription_id", sql<any>`varchar`)
    .addColumn("subscription_customer_id", sql<any>`varchar`)
    .addColumn("subscription_status", sql<any>`varchar`)
    .addColumn("subscription_currency", sql<any>`varchar`)
    .addColumn("subscription_current_period_end", "timestamp")
    .addColumn("subscription_current_period_start", "timestamp")
    .addColumn("subscription_billing_cycle_anchor", "timestamp")
    .addColumn("subscription_canceled_at", "timestamp")
    .addColumn("subscription_created", "timestamp")
    .addColumn("subscription_ended_at", "timestamp")
    .addColumn("subscription_start_date", "timestamp")
    .addColumn("subscription_test_clock", sql<any>`varchar`)
    .addColumn("subscription_trial_end", "timestamp")
    .addColumn("subscription_trial_start", "timestamp")
    .addColumn("subscription_discount_amount", "decimal", (col) => col.defaultTo(sql<any>`0.00`))
    .addColumn("created_at", "timestamp", (col) => col.defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .addColumn("updated_at", "timestamp", (col) => col.defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .addColumn("subscription_price_id", "char")
    .addColumn("subscription_price_amount", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("subscriptions").execute();
}