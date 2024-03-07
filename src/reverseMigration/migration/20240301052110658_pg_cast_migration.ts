import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_cast")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("castsource", "text", (col) => col.unique().notNull())
    .addColumn("casttarget", "text", (col) => col.unique().notNull())
    .addColumn("castfunc", "text", (col) => col.notNull())
    .addColumn("castcontext", "char", (col) => col.notNull())
    .addColumn("castmethod", "char", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_cast").execute();
}