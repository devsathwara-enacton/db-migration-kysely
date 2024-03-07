import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("refresh_tokens")
    .addColumn("instance_id", "uuid")
    .addColumn("id", "text", (col) => col.primaryKey().notNull().defaultTo(sql<any>`nextval('auth.refresh_tokens_id_seq'::regclass)`))
    .addColumn("token", sql<any>`varchar`, (col) => col.unique())
    .addColumn("user_id", sql<any>`varchar`)
    .addColumn("revoked", "boolean")
    .addColumn("created_at", "timestamptz")
    .addColumn("updated_at", "timestamptz")
    .addColumn("parent", sql<any>`varchar`)
    .addColumn("session_id", "uuid")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("refresh_tokens").execute();
}