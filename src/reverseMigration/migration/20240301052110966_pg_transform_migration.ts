import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_transform")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("trftype", "text", (col) => col.unique().notNull())
    .addColumn("trflang", "text", (col) => col.unique().notNull())
    .addColumn("trffromsql", "text", (col) => col.notNull())
    .addColumn("trftosql", "text", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_transform").execute();
}