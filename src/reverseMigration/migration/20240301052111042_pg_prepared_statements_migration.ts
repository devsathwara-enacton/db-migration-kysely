import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_prepared_statements")
    .addColumn("name", "text")
    .addColumn("statement", "text")
    .addColumn("prepare_time", "timestamptz")
    .addColumn("parameter_types", "text")
    .addColumn("result_types", "text")
    .addColumn("from_sql", "boolean")
    .addColumn("generic_plans", "text")
    .addColumn("custom_plans", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_prepared_statements").execute();
}