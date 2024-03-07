import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_constraint")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("conname", "text", (col) => col.unique().notNull())
    .addColumn("connamespace", "text", (col) => col.notNull())
    .addColumn("contype", "char", (col) => col.notNull())
    .addColumn("condeferrable", "boolean", (col) => col.notNull())
    .addColumn("condeferred", "boolean", (col) => col.notNull())
    .addColumn("convalidated", "boolean", (col) => col.notNull())
    .addColumn("conrelid", "text", (col) => col.unique().notNull())
    .addColumn("contypid", "text", (col) => col.unique().notNull())
    .addColumn("conindid", "text", (col) => col.notNull())
    .addColumn("conparentid", "text", (col) => col.notNull())
    .addColumn("confrelid", "text", (col) => col.notNull())
    .addColumn("confupdtype", "char", (col) => col.notNull())
    .addColumn("confdeltype", "char", (col) => col.notNull())
    .addColumn("confmatchtype", "char", (col) => col.notNull())
    .addColumn("conislocal", "boolean", (col) => col.notNull())
    .addColumn("coninhcount", "int2", (col) => col.notNull())
    .addColumn("connoinherit", "boolean", (col) => col.notNull())
    .addColumn("conkey", "text")
    .addColumn("confkey", "text")
    .addColumn("conpfeqop", "text")
    .addColumn("conppeqop", "text")
    .addColumn("conffeqop", "text")
    .addColumn("confdelsetcols", "text")
    .addColumn("conexclop", "text")
    .addColumn("conbin", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_constraint").execute();
}