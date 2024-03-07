import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_database")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("datname", "text", (col) => col.unique().notNull())
    .addColumn("datdba", "text", (col) => col.notNull())
    .addColumn("encoding", "integer", (col) => col.notNull())
    .addColumn("datlocprovider", "char", (col) => col.notNull())
    .addColumn("datistemplate", "boolean", (col) => col.notNull())
    .addColumn("datallowconn", "boolean", (col) => col.notNull())
    .addColumn("datconnlimit", "integer", (col) => col.notNull())
    .addColumn("datfrozenxid", "text", (col) => col.notNull())
    .addColumn("datminmxid", "text", (col) => col.notNull())
    .addColumn("dattablespace", "text", (col) => col.notNull())
    .addColumn("datcollate", "text", (col) => col.notNull())
    .addColumn("datctype", "text", (col) => col.notNull())
    .addColumn("daticulocale", "text")
    .addColumn("daticurules", "text")
    .addColumn("datcollversion", "text")
    .addColumn("datacl", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_database").execute();
}