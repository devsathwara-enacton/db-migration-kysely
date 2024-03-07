import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("sessions")
    .addColumn("id", "uuid", (col) => col.primaryKey().notNull())
    .addColumn("user_id", "uuid", (col) => col.notNull())
    .addColumn("created_at", "timestamptz")
    .addColumn("updated_at", "timestamptz")
    .addColumn("factor_id", "uuid")
    .addColumn("aal", "text")
    .addColumn("not_after", "timestamptz")
    .addColumn("refreshed_at", "timestamp")
    .addColumn("user_agent", "text")
    .addColumn("ip", "text")
    .addColumn("tag", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("sessions").execute();
}