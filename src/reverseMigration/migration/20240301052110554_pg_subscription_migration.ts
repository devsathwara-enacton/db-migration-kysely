import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_subscription")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("subdbid", "text", (col) => col.unique().notNull())
    .addColumn("subskiplsn", "text", (col) => col.notNull())
    .addColumn("subname", "text", (col) => col.unique().notNull())
    .addColumn("subowner", "text", (col) => col.notNull())
    .addColumn("subenabled", "boolean", (col) => col.notNull())
    .addColumn("subbinary", "boolean", (col) => col.notNull())
    .addColumn("substream", "char", (col) => col.notNull())
    .addColumn("subtwophasestate", "char", (col) => col.notNull())
    .addColumn("subdisableonerr", "boolean", (col) => col.notNull())
    .addColumn("subpasswordrequired", "boolean", (col) => col.notNull())
    .addColumn("subrunasowner", "boolean", (col) => col.notNull())
    .addColumn("subconninfo", "text", (col) => col.notNull())
    .addColumn("subslotname", "text")
    .addColumn("subsynccommit", "text", (col) => col.notNull())
    .addColumn("subpublications", "text", (col) => col.notNull())
    .addColumn("suborigin", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_subscription").execute();
}