import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_opfamily")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("opfmethod", "text", (col) => col.unique().notNull())
    .addColumn("opfname", "text", (col) => col.unique().notNull())
    .addColumn("opfnamespace", "text", (col) => col.unique().notNull())
    .addColumn("opfowner", "text", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_opfamily").execute();
}