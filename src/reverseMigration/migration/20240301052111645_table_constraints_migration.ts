import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("table_constraints")
    .addColumn("constraint_catalog", "text")
    .addColumn("constraint_schema", "text")
    .addColumn("constraint_name", "text")
    .addColumn("table_catalog", "text")
    .addColumn("table_schema", "text")
    .addColumn("table_name", "text")
    .addColumn("constraint_type", sql<any>`varchar`)
    .addColumn("is_deferrable", sql<any>`varchar`)
    .addColumn("initially_deferred", sql<any>`varchar`)
    .addColumn("enforced", sql<any>`varchar`)
    .addColumn("nulls_distinct", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("table_constraints").execute();
}