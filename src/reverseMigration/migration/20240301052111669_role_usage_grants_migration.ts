import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("role_usage_grants")
    .addColumn("grantor", "text")
    .addColumn("grantee", "text")
    .addColumn("object_catalog", "text")
    .addColumn("object_schema", "text")
    .addColumn("object_name", "text")
    .addColumn("object_type", sql<any>`varchar`)
    .addColumn("privilege_type", sql<any>`varchar`)
    .addColumn("is_grantable", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("role_usage_grants").execute();
}