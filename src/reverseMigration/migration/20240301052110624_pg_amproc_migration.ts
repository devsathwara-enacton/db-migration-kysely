import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_amproc")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("amprocfamily", "text", (col) => col.unique().notNull())
    .addColumn("amproclefttype", "text", (col) => col.unique().notNull())
    .addColumn("amprocrighttype", "text", (col) => col.unique().notNull())
    .addColumn("amprocnum", "int2", (col) => col.unique().notNull())
    .addColumn("amproc", "text", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_amproc").execute();
}