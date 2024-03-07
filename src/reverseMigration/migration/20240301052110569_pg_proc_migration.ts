import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_proc")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("proname", "text", (col) => col.unique().notNull())
    .addColumn("pronamespace", "text", (col) => col.unique().notNull())
    .addColumn("proowner", "text", (col) => col.notNull())
    .addColumn("prolang", "text", (col) => col.notNull())
    .addColumn("procost", "real", (col) => col.notNull())
    .addColumn("prorows", "real", (col) => col.notNull())
    .addColumn("provariadic", "text", (col) => col.notNull())
    .addColumn("prosupport", "text", (col) => col.notNull())
    .addColumn("prokind", "char", (col) => col.notNull())
    .addColumn("prosecdef", "boolean", (col) => col.notNull())
    .addColumn("proleakproof", "boolean", (col) => col.notNull())
    .addColumn("proisstrict", "boolean", (col) => col.notNull())
    .addColumn("proretset", "boolean", (col) => col.notNull())
    .addColumn("provolatile", "char", (col) => col.notNull())
    .addColumn("proparallel", "char", (col) => col.notNull())
    .addColumn("pronargs", "int2", (col) => col.notNull())
    .addColumn("pronargdefaults", "int2", (col) => col.notNull())
    .addColumn("prorettype", "text", (col) => col.notNull())
    .addColumn("proargtypes", "text", (col) => col.unique().notNull())
    .addColumn("proallargtypes", "text")
    .addColumn("proargmodes", "text")
    .addColumn("proargnames", "text")
    .addColumn("proargdefaults", "text")
    .addColumn("protrftypes", "text")
    .addColumn("prosrc", "text", (col) => col.notNull())
    .addColumn("probin", "text")
    .addColumn("prosqlbody", "text")
    .addColumn("proconfig", "text")
    .addColumn("proacl", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_proc").execute();
}