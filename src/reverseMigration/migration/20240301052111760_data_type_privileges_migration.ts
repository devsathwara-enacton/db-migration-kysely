import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("data_type_privileges")
    .addColumn("object_catalog", "text")
    .addColumn("object_schema", "text")
    .addColumn("object_name", "text")
    .addColumn("object_type", sql<any>`varchar`)
    .addColumn("dtd_identifier", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("data_type_privileges").execute();
}