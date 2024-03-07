import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("referential_constraints")
    .addColumn("constraint_catalog", "text")
    .addColumn("constraint_schema", "text")
    .addColumn("constraint_name", "text")
    .addColumn("unique_constraint_catalog", "text")
    .addColumn("unique_constraint_schema", "text")
    .addColumn("unique_constraint_name", "text")
    .addColumn("match_option", sql<any>`varchar`)
    .addColumn("update_rule", sql<any>`varchar`)
    .addColumn("delete_rule", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("referential_constraints").execute();
}