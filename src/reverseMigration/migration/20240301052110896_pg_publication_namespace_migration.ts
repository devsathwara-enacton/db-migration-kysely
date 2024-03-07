import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_publication_namespace")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("pnpubid", "text", (col) => col.unique().notNull())
    .addColumn("pnnspid", "text", (col) => col.unique().notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_publication_namespace").execute();
}