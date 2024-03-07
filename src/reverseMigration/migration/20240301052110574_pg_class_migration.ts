import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_class")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("relname", "text", (col) => col.unique().notNull())
    .addColumn("relnamespace", "text", (col) => col.unique().notNull())
    .addColumn("reltype", "text", (col) => col.notNull())
    .addColumn("reloftype", "text", (col) => col.notNull())
    .addColumn("relowner", "text", (col) => col.notNull())
    .addColumn("relam", "text", (col) => col.notNull())
    .addColumn("relfilenode", "text", (col) => col.notNull())
    .addColumn("reltablespace", "text", (col) => col.notNull())
    .addColumn("relpages", "integer", (col) => col.notNull())
    .addColumn("reltuples", "real", (col) => col.notNull())
    .addColumn("relallvisible", "integer", (col) => col.notNull())
    .addColumn("reltoastrelid", "text", (col) => col.notNull())
    .addColumn("relhasindex", "boolean", (col) => col.notNull())
    .addColumn("relisshared", "boolean", (col) => col.notNull())
    .addColumn("relpersistence", "char", (col) => col.notNull())
    .addColumn("relkind", "char", (col) => col.notNull())
    .addColumn("relnatts", "int2", (col) => col.notNull())
    .addColumn("relchecks", "int2", (col) => col.notNull())
    .addColumn("relhasrules", "boolean", (col) => col.notNull())
    .addColumn("relhastriggers", "boolean", (col) => col.notNull())
    .addColumn("relhassubclass", "boolean", (col) => col.notNull())
    .addColumn("relrowsecurity", "boolean", (col) => col.notNull())
    .addColumn("relforcerowsecurity", "boolean", (col) => col.notNull())
    .addColumn("relispopulated", "boolean", (col) => col.notNull())
    .addColumn("relreplident", "char", (col) => col.notNull())
    .addColumn("relispartition", "boolean", (col) => col.notNull())
    .addColumn("relrewrite", "text", (col) => col.notNull())
    .addColumn("relfrozenxid", "text", (col) => col.notNull())
    .addColumn("relminmxid", "text", (col) => col.notNull())
    .addColumn("relacl", "text")
    .addColumn("reloptions", "text")
    .addColumn("relpartbound", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_class").execute();
}