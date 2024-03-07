import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_policy")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("polname", "text", (col) => col.unique().notNull())
    .addColumn("polrelid", "text", (col) => col.unique().notNull())
    .addColumn("polcmd", "char", (col) => col.notNull())
    .addColumn("polpermissive", "boolean", (col) => col.notNull())
    .addColumn("polroles", "text", (col) => col.notNull())
    .addColumn("polqual", "text")
    .addColumn("polwithcheck", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_policy").execute();
}