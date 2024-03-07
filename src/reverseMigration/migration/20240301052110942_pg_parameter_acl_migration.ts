import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_parameter_acl")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("parname", "text", (col) => col.unique().notNull())
    .addColumn("paracl", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_parameter_acl").execute();
}