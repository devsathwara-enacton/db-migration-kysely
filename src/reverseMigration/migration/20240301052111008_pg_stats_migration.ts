import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stats")
    .addColumn("schemaname", "text")
    .addColumn("tablename", "text")
    .addColumn("attname", "text")
    .addColumn("inherited", "boolean")
    .addColumn("null_frac", "real")
    .addColumn("avg_width", "integer")
    .addColumn("n_distinct", "real")
    .addColumn("most_common_vals", "text")
    .addColumn("most_common_freqs", "text")
    .addColumn("histogram_bounds", "text")
    .addColumn("correlation", "real")
    .addColumn("most_common_elems", "text")
    .addColumn("most_common_elem_freqs", "text")
    .addColumn("elem_count_histogram", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stats").execute();
}