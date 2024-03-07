import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_opclass")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("opcmethod", "text", (col) => col.unique().notNull())
    .addColumn("opcname", "text", (col) => col.unique().notNull())
    .addColumn("opcnamespace", "text", (col) => col.unique().notNull())
    .addColumn("opcowner", "text", (col) => col.notNull())
    .addColumn("opcfamily", "text", (col) => col.notNull())
    .addColumn("opcintype", "text", (col) => col.notNull())
    .addColumn("opcdefault", "boolean", (col) => col.notNull())
    .addColumn("opckeytype", "text", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_opclass").execute();
}