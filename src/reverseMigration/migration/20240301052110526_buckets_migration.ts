import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("buckets")
    .addColumn("id", "text", (col) => col.primaryKey().notNull())
    .addColumn("name", "text", (col) => col.notNull())
    .addColumn("owner", "uuid")
    .addColumn("created_at", "timestamptz", (col) => col.defaultTo(sql<any>`now()`))
    .addColumn("updated_at", "timestamptz", (col) => col.defaultTo(sql<any>`now()`))
    .addColumn("public", "boolean", (col) => col.defaultTo(sql<any>`false`))
    .addColumn("avif_autodetection", "boolean", (col) => col.defaultTo(sql<any>`false`))
    .addColumn("file_size_limit", "text")
    .addColumn("allowed_mime_types", "text")
    .addColumn("owner_id", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("buckets").execute();
}