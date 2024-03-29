import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("columns")
    .addColumn("table_catalog", "text")
    .addColumn("table_schema", "text")
    .addColumn("table_name", "text")
    .addColumn("column_name", "text")
    .addColumn("ordinal_position", "integer")
    .addColumn("column_default", sql<any>`varchar`)
    .addColumn("is_nullable", sql<any>`varchar`)
    .addColumn("data_type", sql<any>`varchar`)
    .addColumn("character_maximum_length", "integer")
    .addColumn("character_octet_length", "integer")
    .addColumn("numeric_precision", "integer")
    .addColumn("numeric_precision_radix", "integer")
    .addColumn("numeric_scale", "integer")
    .addColumn("datetime_precision", "integer")
    .addColumn("interval_type", sql<any>`varchar`)
    .addColumn("interval_precision", "integer")
    .addColumn("character_set_catalog", "text")
    .addColumn("character_set_schema", "text")
    .addColumn("character_set_name", "text")
    .addColumn("collation_catalog", "text")
    .addColumn("collation_schema", "text")
    .addColumn("collation_name", "text")
    .addColumn("domain_catalog", "text")
    .addColumn("domain_schema", "text")
    .addColumn("domain_name", "text")
    .addColumn("udt_catalog", "text")
    .addColumn("udt_schema", "text")
    .addColumn("udt_name", "text")
    .addColumn("scope_catalog", "text")
    .addColumn("scope_schema", "text")
    .addColumn("scope_name", "text")
    .addColumn("maximum_cardinality", "integer")
    .addColumn("dtd_identifier", "text")
    .addColumn("is_self_referencing", sql<any>`varchar`)
    .addColumn("is_identity", sql<any>`varchar`)
    .addColumn("identity_generation", sql<any>`varchar`)
    .addColumn("identity_start", sql<any>`varchar`)
    .addColumn("identity_increment", sql<any>`varchar`)
    .addColumn("identity_maximum", sql<any>`varchar`)
    .addColumn("identity_minimum", sql<any>`varchar`)
    .addColumn("identity_cycle", sql<any>`varchar`)
    .addColumn("is_generated", sql<any>`varchar`)
    .addColumn("generation_expression", sql<any>`varchar`)
    .addColumn("is_updatable", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("columns").execute();
}