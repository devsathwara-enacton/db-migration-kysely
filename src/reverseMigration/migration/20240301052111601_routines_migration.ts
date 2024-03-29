import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("routines")
    .addColumn("specific_catalog", "text")
    .addColumn("specific_schema", "text")
    .addColumn("specific_name", "text")
    .addColumn("routine_catalog", "text")
    .addColumn("routine_schema", "text")
    .addColumn("routine_name", "text")
    .addColumn("routine_type", sql<any>`varchar`)
    .addColumn("module_catalog", "text")
    .addColumn("module_schema", "text")
    .addColumn("module_name", "text")
    .addColumn("udt_catalog", "text")
    .addColumn("udt_schema", "text")
    .addColumn("udt_name", "text")
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
    .addColumn("type_udt_catalog", "text")
    .addColumn("type_udt_schema", "text")
    .addColumn("type_udt_name", "text")
    .addColumn("scope_catalog", "text")
    .addColumn("scope_schema", "text")
    .addColumn("scope_name", "text")
    .addColumn("maximum_cardinality", "integer")
    .addColumn("dtd_identifier", "text")
    .addColumn("routine_body", sql<any>`varchar`)
    .addColumn("routine_definition", sql<any>`varchar`)
    .addColumn("external_name", sql<any>`varchar`)
    .addColumn("external_language", sql<any>`varchar`)
    .addColumn("parameter_style", sql<any>`varchar`)
    .addColumn("is_deterministic", sql<any>`varchar`)
    .addColumn("sql_data_access", sql<any>`varchar`)
    .addColumn("is_null_call", sql<any>`varchar`)
    .addColumn("sql_path", sql<any>`varchar`)
    .addColumn("schema_level_routine", sql<any>`varchar`)
    .addColumn("max_dynamic_result_sets", "integer")
    .addColumn("is_user_defined_cast", sql<any>`varchar`)
    .addColumn("is_implicitly_invocable", sql<any>`varchar`)
    .addColumn("security_type", sql<any>`varchar`)
    .addColumn("to_sql_specific_catalog", "text")
    .addColumn("to_sql_specific_schema", "text")
    .addColumn("to_sql_specific_name", "text")
    .addColumn("as_locator", sql<any>`varchar`)
    .addColumn("created", "timestamptz")
    .addColumn("last_altered", "timestamptz")
    .addColumn("new_savepoint_level", sql<any>`varchar`)
    .addColumn("is_udt_dependent", sql<any>`varchar`)
    .addColumn("result_cast_from_data_type", sql<any>`varchar`)
    .addColumn("result_cast_as_locator", sql<any>`varchar`)
    .addColumn("result_cast_char_max_length", "integer")
    .addColumn("result_cast_char_octet_length", "integer")
    .addColumn("result_cast_char_set_catalog", "text")
    .addColumn("result_cast_char_set_schema", "text")
    .addColumn("result_cast_char_set_name", "text")
    .addColumn("result_cast_collation_catalog", "text")
    .addColumn("result_cast_collation_schema", "text")
    .addColumn("result_cast_collation_name", "text")
    .addColumn("result_cast_numeric_precision", "integer")
    .addColumn("result_cast_numeric_precision_radix", "integer")
    .addColumn("result_cast_numeric_scale", "integer")
    .addColumn("result_cast_datetime_precision", "integer")
    .addColumn("result_cast_interval_type", sql<any>`varchar`)
    .addColumn("result_cast_interval_precision", "integer")
    .addColumn("result_cast_type_udt_catalog", "text")
    .addColumn("result_cast_type_udt_schema", "text")
    .addColumn("result_cast_type_udt_name", "text")
    .addColumn("result_cast_scope_catalog", "text")
    .addColumn("result_cast_scope_schema", "text")
    .addColumn("result_cast_scope_name", "text")
    .addColumn("result_cast_maximum_cardinality", "integer")
    .addColumn("result_cast_dtd_identifier", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("routines").execute();
}