import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("mfa_factors")
    .addColumn("id", "uuid", (col) => col.primaryKey().notNull())
    .addColumn("user_id", "uuid", (col) => col.notNull())
    .addColumn("friendly_name", "text")
    .addColumn("factor_type", "text", (col) => col.notNull())
    .addColumn("status", "text", (col) => col.notNull())
    .addColumn("created_at", "timestamptz", (col) => col.notNull())
    .addColumn("updated_at", "timestamptz", (col) => col.notNull())
    .addColumn("secret", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("mfa_factors").execute();
}