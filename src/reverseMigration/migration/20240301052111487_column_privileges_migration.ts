import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("column_privileges")
    .addColumn("grantor", "text")
    .addColumn("grantee", "text")
    .addColumn("table_catalog", "text")
    .addColumn("table_schema", "text")
    .addColumn("table_name", "text")
    .addColumn("column_name", "text")
    .addColumn("privilege_type", sql<any>`varchar`)
    .addColumn("is_grantable", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("column_privileges").execute();
}