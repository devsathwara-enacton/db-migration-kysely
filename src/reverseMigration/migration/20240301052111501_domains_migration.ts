import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("domains")
    .addColumn("domain_catalog", "text")
    .addColumn("domain_schema", "text")
    .addColumn("domain_name", "text")
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
    .addColumn("domain_default", sql<any>`varchar`)
    .addColumn("udt_catalog", "text")
    .addColumn("udt_schema", "text")
    .addColumn("udt_name", "text")
    .addColumn("scope_catalog", "text")
    .addColumn("scope_schema", "text")
    .addColumn("scope_name", "text")
    .addColumn("maximum_cardinality", "integer")
    .addColumn("dtd_identifier", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("domains").execute();
}