import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("user_referral_earnings")
    .addColumn("id", "integer", (col) => col.primaryKey().notNull().defaultTo(sql<any>`nextval('user_referral_earnings_id_seq'::regclass)`))
    .addColumn("user_id", "text", (col) => col.notNull())
    .addColumn("referred_user_id", "text", (col) => col.notNull())
    .addColumn("amount", "decimal", (col) => col.notNull())
    .addColumn("status", sql<any>`varchar`, (col) => col.defaultTo(sql<any>`'pending'::character varying`))
    .addColumn("created_at", "timestamptz", (col) => col.defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .addColumn("updated_at", "timestamptz", (col) => col.defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("user_referral_earnings").execute();
}