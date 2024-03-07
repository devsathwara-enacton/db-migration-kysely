import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("user_defined_types")
    .addColumn("user_defined_type_catalog", "text")
    .addColumn("user_defined_type_schema", "text")
    .addColumn("user_defined_type_name", "text")
    .addColumn("user_defined_type_category", sql<any>`varchar`)
    .addColumn("is_instantiable", sql<any>`varchar`)
    .addColumn("is_final", sql<any>`varchar`)
    .addColumn("ordering_form", sql<any>`varchar`)
    .addColumn("ordering_category", sql<any>`varchar`)
    .addColumn("ordering_routine_catalog", "text")
    .addColumn("ordering_routine_schema", "text")
    .addColumn("ordering_routine_name", "text")
    .addColumn("reference_type", sql<any>`varchar`)
    .addColumn("data_type", sql<any>`varchar`)
    .addColumn("character_maximum_length", "integer")
    .addColumn("character_octet_length", "integer")
    .addColumn("character_set_catalog", "text")
    .addColumn("character_set_schema", "text")
    .addColumn("character_set_name", "text")
    .addColumn("collation_catalog", "text")
    .addColumn("collation_schema", "text")
    .addColumn("collation_name", "text")
    .addColumn("numeric_precision", "integer")
    .addColumn("numeric_precision_radix", "integer")
    .addColumn("numeric_scale", "integer")
    .addColumn("datetime_precision", "integer")
    .addColumn("interval_type", sql<any>`varchar`)
    .addColumn("interval_precision", "integer")
    .addColumn("source_dtd_identifier", "text")
    .addColumn("ref_dtd_identifier", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("user_defined_types").execute();
}