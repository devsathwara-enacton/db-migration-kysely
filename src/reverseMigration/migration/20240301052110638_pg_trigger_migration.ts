import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_trigger")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("tgrelid", "text", (col) => col.unique().notNull())
    .addColumn("tgparentid", "text", (col) => col.notNull())
    .addColumn("tgname", "text", (col) => col.unique().notNull())
    .addColumn("tgfoid", "text", (col) => col.notNull())
    .addColumn("tgtype", "int2", (col) => col.notNull())
    .addColumn("tgenabled", "char", (col) => col.notNull())
    .addColumn("tgisinternal", "boolean", (col) => col.notNull())
    .addColumn("tgconstrrelid", "text", (col) => col.notNull())
    .addColumn("tgconstrindid", "text", (col) => col.notNull())
    .addColumn("tgconstraint", "text", (col) => col.notNull())
    .addColumn("tgdeferrable", "boolean", (col) => col.notNull())
    .addColumn("tginitdeferred", "boolean", (col) => col.notNull())
    .addColumn("tgnargs", "int2", (col) => col.notNull())
    .addColumn("tgattr", "text", (col) => col.notNull())
    .addColumn("tgargs", "binary", (col) => col.notNull())
    .addColumn("tgqual", "text")
    .addColumn("tgoldtable", "text")
    .addColumn("tgnewtable", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_trigger").execute();
}