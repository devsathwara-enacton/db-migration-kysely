import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("mfa_challenges")
    .addColumn("id", "uuid", (col) => col.primaryKey().notNull())
    .addColumn("factor_id", "uuid", (col) => col.notNull())
    .addColumn("created_at", "timestamptz", (col) => col.notNull())
    .addColumn("verified_at", "timestamptz")
    .addColumn("ip_address", "text", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("mfa_challenges").execute();
}