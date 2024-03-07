import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_shmem_allocations")
    .addColumn("name", "text")
    .addColumn("off", "text")
    .addColumn("size", "text")
    .addColumn("allocated_size", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_shmem_allocations").execute();
}