import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("role_udt_grants")
    .addColumn("grantor", "text")
    .addColumn("grantee", "text")
    .addColumn("udt_catalog", "text")
    .addColumn("udt_schema", "text")
    .addColumn("udt_name", "text")
    .addColumn("privilege_type", sql<any>`varchar`)
    .addColumn("is_grantable", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("role_udt_grants").execute();
}