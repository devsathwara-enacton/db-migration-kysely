import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_seclabels")
    .addColumn("objoid", "text")
    .addColumn("classoid", "text")
    .addColumn("objsubid", "integer")
    .addColumn("objtype", "text")
    .addColumn("objnamespace", "text")
    .addColumn("objname", "text")
    .addColumn("provider", "text")
    .addColumn("label", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_seclabels").execute();
}