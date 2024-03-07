import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("_pg_foreign_table_columns")
    .addColumn("nspname", "text")
    .addColumn("relname", "text")
    .addColumn("attname", "text")
    .addColumn("attfdwoptions", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("_pg_foreign_table_columns").execute();
}