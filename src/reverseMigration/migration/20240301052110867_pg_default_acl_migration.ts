import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_default_acl")
    .addColumn("oid", "text", (col) => col.primaryKey().notNull())
    .addColumn("defaclrole", "text", (col) => col.unique().notNull())
    .addColumn("defaclnamespace", "text", (col) => col.unique().notNull())
    .addColumn("defaclobjtype", "char", (col) => col.unique().notNull())
    .addColumn("defaclacl", "text", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_default_acl").execute();
}