import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("mfa_amr_claims")
    .addColumn("session_id", "uuid", (col) => col.unique().notNull())
    .addColumn("created_at", "timestamptz", (col) => col.notNull())
    .addColumn("updated_at", "timestamptz", (col) => col.notNull())
    .addColumn("authentication_method", "text", (col) => col.unique().notNull())
    .addColumn("id", "uuid", (col) => col.primaryKey().notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("mfa_amr_claims").execute();
}