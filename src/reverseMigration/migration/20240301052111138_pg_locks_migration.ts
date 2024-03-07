import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_locks")
    .addColumn("locktype", "text")
    .addColumn("database", "text")
    .addColumn("relation", "text")
    .addColumn("page", "integer")
    .addColumn("tuple", "int2")
    .addColumn("virtualxid", "text")
    .addColumn("transactionid", "text")
    .addColumn("classid", "text")
    .addColumn("objid", "text")
    .addColumn("objsubid", "int2")
    .addColumn("virtualtransaction", "text")
    .addColumn("pid", "integer")
    .addColumn("mode", "text")
    .addColumn("granted", "boolean")
    .addColumn("fastpath", "boolean")
    .addColumn("waitstart", "timestamptz")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_locks").execute();
}