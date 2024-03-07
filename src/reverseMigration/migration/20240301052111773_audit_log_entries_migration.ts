import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("audit_log_entries")
    .addColumn("instance_id", "uuid")
    .addColumn("id", "uuid", (col) => col.primaryKey().notNull())
    .addColumn("payload", "json")
    .addColumn("created_at", "timestamptz")
    .addColumn("ip_address", sql<any>`varchar`, (col) => col.notNull().defaultTo(sql<any>`''::character varying`))
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("audit_log_entries").execute();
}