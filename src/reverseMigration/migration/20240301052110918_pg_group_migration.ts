import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_group")
    .addColumn("groname", "text")
    .addColumn("grosysid", "text")
    .addColumn("grolist", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_group").execute();
}