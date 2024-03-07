import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_enum")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("enumtypid", "text", (col) => col.unique().unique().notNull())
    .addColumn("enumsortorder", "real", (col) => col.unique().notNull())
    .addColumn("enumlabel", "text", (col) => col.unique().notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_enum").execute();
}