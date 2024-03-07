import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("sql_features")
    .addColumn("feature_id", sql<any>`varchar`)
    .addColumn("feature_name", sql<any>`varchar`)
    .addColumn("sub_feature_id", sql<any>`varchar`)
    .addColumn("sub_feature_name", sql<any>`varchar`)
    .addColumn("is_supported", sql<any>`varchar`)
    .addColumn("is_verified_by", sql<any>`varchar`)
    .addColumn("comments", sql<any>`varchar`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("sql_features").execute();
}