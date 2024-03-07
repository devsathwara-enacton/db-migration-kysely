import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("objects")
    .addColumn("id", "uuid", (col) => col.primaryKey().notNull().defaultTo(sql<any>`gen_random_uuid()`))
    .addColumn("bucket_id", "text")
    .addColumn("name", "text")
    .addColumn("owner", "uuid")
    .addColumn("created_at", "timestamptz", (col) => col.defaultTo(sql<any>`now()`))
    .addColumn("updated_at", "timestamptz", (col) => col.defaultTo(sql<any>`now()`))
    .addColumn("last_accessed_at", "timestamptz", (col) => col.defaultTo(sql<any>`now()`))
    .addColumn("path_tokens", "text", (col) => col.autoIncrement())
    .addColumn("version", "text")
    .addColumn("owner_id", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("objects").execute();
}