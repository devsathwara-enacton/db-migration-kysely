import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_prepared_xacts")
    .addColumn("transaction", "text")
    .addColumn("gid", "text")
    .addColumn("prepared", "timestamptz")
    .addColumn("owner", "text")
    .addColumn("database", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_prepared_xacts").execute();
}