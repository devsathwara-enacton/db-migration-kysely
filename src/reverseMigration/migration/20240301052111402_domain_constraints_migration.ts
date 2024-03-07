import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("domain_constraints")
    .addColumn("constraint_catalog", "text")
    .addColumn("constraint_schema", "text")
    .addColumn("constraint_name", "text")
    .addColumn("domain_catalog", "text")
    .addColumn("domain_schema", "text")
    .addColumn("domain_name", "text")
    .addColumn("is_deferrable", sql<any>`varchar`)
    .addColumn("initially_deferred", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("domain_constraints").execute();
}