import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_event_trigger")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("evtname", "text", (col) => col.unique().notNull())
    .addColumn("evtevent", "text", (col) => col.notNull())
    .addColumn("evtowner", "text", (col) => col.notNull())
    .addColumn("evtfoid", "text", (col) => col.notNull())
    .addColumn("evtenabled", "char", (col) => col.notNull())
    .addColumn("evttags", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_event_trigger").execute();
}