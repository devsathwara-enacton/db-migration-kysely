import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_amop")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("amopfamily", "text", (col) => col.unique().unique().notNull())
    .addColumn("amoplefttype", "text", (col) => col.unique().notNull())
    .addColumn("amoprighttype", "text", (col) => col.unique().notNull())
    .addColumn("amopstrategy", "int2", (col) => col.unique().notNull())
    .addColumn("amoppurpose", "char", (col) => col.unique().notNull())
    .addColumn("amopopr", "text", (col) => col.unique().notNull())
    .addColumn("amopmethod", "text", (col) => col.notNull())
    .addColumn("amopsortfamily", "text", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_amop").execute();
}