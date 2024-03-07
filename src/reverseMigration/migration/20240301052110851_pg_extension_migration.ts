import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_extension")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("extname", "text", (col) => col.unique().notNull())
    .addColumn("extowner", "text", (col) => col.notNull())
    .addColumn("extnamespace", "text", (col) => col.notNull())
    .addColumn("extrelocatable", "boolean", (col) => col.notNull())
    .addColumn("extversion", "text", (col) => col.notNull())
    .addColumn("extconfig", "text")
    .addColumn("extcondition", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_extension").execute();
}