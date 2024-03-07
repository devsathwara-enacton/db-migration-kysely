import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_backend_memory_contexts")
    .addColumn("name", "text")
    .addColumn("ident", "text")
    .addColumn("parent", "text")
    .addColumn("level", "integer")
    .addColumn("total_bytes", "text")
    .addColumn("total_nblocks", "text")
    .addColumn("free_bytes", "text")
    .addColumn("free_chunks", "text")
    .addColumn("used_bytes", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_backend_memory_contexts").execute();
}