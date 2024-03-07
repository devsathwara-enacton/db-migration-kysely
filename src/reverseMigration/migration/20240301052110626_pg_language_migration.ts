import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_language")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("lanname", "text", (col) => col.unique().notNull())
    .addColumn("lanowner", "text", (col) => col.notNull())
    .addColumn("lanispl", "boolean", (col) => col.notNull())
    .addColumn("lanpltrusted", "boolean", (col) => col.notNull())
    .addColumn("lanplcallfoid", "text", (col) => col.notNull())
    .addColumn("laninline", "text", (col) => col.notNull())
    .addColumn("lanvalidator", "text", (col) => col.notNull())
    .addColumn("lanacl", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_language").execute();
}