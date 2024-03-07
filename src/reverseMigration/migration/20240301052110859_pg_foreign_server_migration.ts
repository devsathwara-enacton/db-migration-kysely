import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_foreign_server")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("srvname", "text", (col) => col.unique().notNull())
    .addColumn("srvowner", "text", (col) => col.notNull())
    .addColumn("srvfdw", "text", (col) => col.notNull())
    .addColumn("srvtype", "text")
    .addColumn("srvversion", "text")
    .addColumn("srvacl", "text")
    .addColumn("srvoptions", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_foreign_server").execute();
}