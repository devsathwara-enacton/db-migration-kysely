import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("routine_privileges")
    .addColumn("grantor", "text")
    .addColumn("grantee", "text")
    .addColumn("specific_catalog", "text")
    .addColumn("specific_schema", "text")
    .addColumn("specific_name", "text")
    .addColumn("routine_catalog", "text")
    .addColumn("routine_schema", "text")
    .addColumn("routine_name", "text")
    .addColumn("privilege_type", sql<any>`varchar`)
    .addColumn("is_grantable", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("routine_privileges").execute();
}