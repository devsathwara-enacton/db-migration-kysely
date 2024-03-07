import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_statistic")
    .addColumn("starelid", "text", (col) => col.primaryKey().notNull())
    .addColumn("staattnum", "int2", (col) => col.primaryKey().notNull())
    .addColumn("stainherit", "boolean", (col) => col.primaryKey().notNull())
    .addColumn("stanullfrac", "real", (col) => col.notNull())
    .addColumn("stawidth", "integer", (col) => col.notNull())
    .addColumn("stadistinct", "real", (col) => col.notNull())
    .addColumn("stakind1", "int2", (col) => col.notNull())
    .addColumn("stakind2", "int2", (col) => col.notNull())
    .addColumn("stakind3", "int2", (col) => col.notNull())
    .addColumn("stakind4", "int2", (col) => col.notNull())
    .addColumn("stakind5", "int2", (col) => col.notNull())
    .addColumn("staop1", "text", (col) => col.notNull())
    .addColumn("staop2", "text", (col) => col.notNull())
    .addColumn("staop3", "text", (col) => col.notNull())
    .addColumn("staop4", "text", (col) => col.notNull())
    .addColumn("staop5", "text", (col) => col.notNull())
    .addColumn("stacoll1", "text", (col) => col.notNull())
    .addColumn("stacoll2", "text", (col) => col.notNull())
    .addColumn("stacoll3", "text", (col) => col.notNull())
    .addColumn("stacoll4", "text", (col) => col.notNull())
    .addColumn("stacoll5", "text", (col) => col.notNull())
    .addColumn("stanumbers1", "text")
    .addColumn("stanumbers2", "text")
    .addColumn("stanumbers3", "text")
    .addColumn("stanumbers4", "text")
    .addColumn("stanumbers5", "text")
    .addColumn("stavalues1", "text")
    .addColumn("stavalues2", "text")
    .addColumn("stavalues3", "text")
    .addColumn("stavalues4", "text")
    .addColumn("stavalues5", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_statistic").execute();
}