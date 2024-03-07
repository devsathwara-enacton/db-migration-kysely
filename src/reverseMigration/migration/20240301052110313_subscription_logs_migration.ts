import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("subscription_logs")
    .addColumn("id", "integer", (col) => col.primaryKey().notNull().defaultTo(sql<any>`nextval('subscription_logs_id_seq'::regclass)`))
    .addColumn("status", sql<any>`varchar`)
    .addColumn("payload", "text")
    .addColumn("created_at", "timestamptz", (col) => col.defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .addColumn("updated_at", "timestamptz", (col) => col.defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("subscription_logs").execute();
}