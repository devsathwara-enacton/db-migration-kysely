import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("check_constraint_routine_usage")
    .addColumn("constraint_catalog", "text")
    .addColumn("constraint_schema", "text")
    .addColumn("constraint_name", "text")
    .addColumn("specific_catalog", "text")
    .addColumn("specific_schema", "text")
    .addColumn("specific_name", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("check_constraint_routine_usage").execute();
}