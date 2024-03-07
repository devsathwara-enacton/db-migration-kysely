import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_user")
    .addColumn("usename", "text")
    .addColumn("usesysid", "text")
    .addColumn("usecreatedb", "boolean")
    .addColumn("usesuper", "boolean")
    .addColumn("userepl", "boolean")
    .addColumn("usebypassrls", "boolean")
    .addColumn("passwd", "text")
    .addColumn("valuntil", "timestamptz")
    .addColumn("useconfig", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_user").execute();
}