import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_publication_rel")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("prpubid", "text", (col) => col.unique().notNull())
    .addColumn("prrelid", "text", (col) => col.unique().notNull())
    .addColumn("prqual", "text")
    .addColumn("prattrs", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_publication_rel").execute();
}