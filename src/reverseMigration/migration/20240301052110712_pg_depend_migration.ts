import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_depend")
    .addColumn("classid", "text", (col) => col.notNull())
    .addColumn("objid", "text", (col) => col.notNull())
    .addColumn("objsubid", "integer", (col) => col.notNull())
    .addColumn("refclassid", "text", (col) => col.notNull())
    .addColumn("refobjid", "text", (col) => col.notNull())
    .addColumn("refobjsubid", "integer", (col) => col.notNull())
    .addColumn("deptype", "char", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_depend").execute();
}