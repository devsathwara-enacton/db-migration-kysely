import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("sql_sizing")
    .addColumn("sizing_id", "integer")
    .addColumn("sizing_name", sql<any>`varchar`)
    .addColumn("supported_value", "integer")
    .addColumn("comments", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("sql_sizing").execute();
}