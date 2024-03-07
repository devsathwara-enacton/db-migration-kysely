import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("administrable_role_authorizations")
    .addColumn("grantee", "text")
    .addColumn("role_name", "text")
    .addColumn("is_grantable", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("administrable_role_authorizations").execute();
}