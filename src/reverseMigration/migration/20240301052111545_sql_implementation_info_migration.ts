import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("sql_implementation_info")
    .addColumn("implementation_info_id", sql<any>`varchar`)
    .addColumn("implementation_info_name", sql<any>`varchar`)
    .addColumn("integer_value", "integer")
    .addColumn("character_value", sql<any>`varchar`)
    .addColumn("comments", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("sql_implementation_info").execute();
}