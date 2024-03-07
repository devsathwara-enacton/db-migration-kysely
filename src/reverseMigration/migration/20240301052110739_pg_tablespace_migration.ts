import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_tablespace")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("spcname", "text", (col) => col.unique().notNull())
    .addColumn("spcowner", "text", (col) => col.notNull())
    .addColumn("spcacl", "text")
    .addColumn("spcoptions", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_tablespace").execute();
}