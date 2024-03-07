import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("identities")
    .addColumn("provider_id", "text", (col) => col.unique().notNull())
    .addColumn("user_id", "uuid", (col) => col.notNull())
    .addColumn("provider", "text", (col) => col.unique().notNull())
    .addColumn("last_sign_in_at", "timestamptz")
    .addColumn("created_at", "timestamptz")
    .addColumn("updated_at", "timestamptz")
    .addColumn("email", "text", (col) => col.autoIncrement())
    .addColumn("id", "uuid", (col) => col.primaryKey().notNull().defaultTo(sql<any>`gen_random_uuid()`))
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("identities").execute();
}