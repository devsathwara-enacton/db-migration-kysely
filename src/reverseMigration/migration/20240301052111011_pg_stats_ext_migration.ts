import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stats_ext")
    .addColumn("schemaname", "text")
    .addColumn("tablename", "text")
    .addColumn("statistics_schemaname", "text")
    .addColumn("statistics_name", "text")
    .addColumn("statistics_owner", "text")
    .addColumn("attnames", "text")
    .addColumn("exprs", "text")
    .addColumn("kinds", "text")
    .addColumn("inherited", "boolean")
    .addColumn("n_distinct", "text")
    .addColumn("dependencies", "text")
    .addColumn("most_common_vals", "text")
    .addColumn("most_common_val_nulls", "text")
    .addColumn("most_common_freqs", "text")
    .addColumn("most_common_base_freqs", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stats_ext").execute();
}