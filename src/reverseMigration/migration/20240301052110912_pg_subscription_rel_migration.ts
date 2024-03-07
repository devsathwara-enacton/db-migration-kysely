import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_subscription_rel")
    .addColumn("srsubid", "text", (col) => col.primaryKey().notNull())
    .addColumn("srrelid", "text", (col) => col.primaryKey().notNull())
    .addColumn("srsubstate", "char", (col) => col.notNull())
    .addColumn("srsublsn", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_subscription_rel").execute();
}