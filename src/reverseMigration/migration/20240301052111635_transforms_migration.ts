import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("transforms")
    .addColumn("udt_catalog", "text")
    .addColumn("udt_schema", "text")
    .addColumn("udt_name", "text")
    .addColumn("specific_catalog", "text")
    .addColumn("specific_schema", "text")
    .addColumn("specific_name", "text")
    .addColumn("group_name", "text")
    .addColumn("transform_type", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("transforms").execute();
}