import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("sequences")
    .addColumn("sequence_catalog", "text")
    .addColumn("sequence_schema", "text")
    .addColumn("sequence_name", "text")
    .addColumn("data_type", sql<any>`varchar`)
    .addColumn("numeric_precision", "integer")
    .addColumn("numeric_precision_radix", "integer")
    .addColumn("numeric_scale", "integer")
    .addColumn("start_value", sql<any>`varchar`)
    .addColumn("minimum_value", sql<any>`varchar`)
    .addColumn("maximum_value", sql<any>`varchar`)
    .addColumn("increment", sql<any>`varchar`)
    .addColumn("cycle_option", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("sequences").execute();
}