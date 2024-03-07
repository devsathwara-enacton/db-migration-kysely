import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_stat_xact_user_functions")
    .addColumn("funcid", "text")
    .addColumn("schemaname", "text")
    .addColumn("funcname", "text")
    .addColumn("calls", "text")
    .addColumn("total_time", "double")
    .addColumn("self_time", "double")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_stat_xact_user_functions").execute();
}