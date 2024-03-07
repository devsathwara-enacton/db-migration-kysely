import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("instances")
    .addColumn("id", "uuid", (col) => col.primaryKey().notNull())
    .addColumn("uuid", "uuid")
    .addColumn("raw_base_config", "text")
    .addColumn("created_at", "timestamptz")
    .addColumn("updated_at", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("instances").execute();
}