import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_index")
    .addColumn("indexrelid", "text", (col) => col.primaryKey().notNull())
    .addColumn("indrelid", "text", (col) => col.notNull())
    .addColumn("indnatts", "int2", (col) => col.notNull())
    .addColumn("indnkeyatts", "int2", (col) => col.notNull())
    .addColumn("indisunique", "boolean", (col) => col.notNull())
    .addColumn("indnullsnotdistinct", "boolean", (col) => col.notNull())
    .addColumn("indisprimary", "boolean", (col) => col.notNull())
    .addColumn("indisexclusion", "boolean", (col) => col.notNull())
    .addColumn("indimmediate", "boolean", (col) => col.notNull())
    .addColumn("indisclustered", "boolean", (col) => col.notNull())
    .addColumn("indisvalid", "boolean", (col) => col.notNull())
    .addColumn("indcheckxmin", "boolean", (col) => col.notNull())
    .addColumn("indisready", "boolean", (col) => col.notNull())
    .addColumn("indislive", "boolean", (col) => col.notNull())
    .addColumn("indisreplident", "boolean", (col) => col.notNull())
    .addColumn("indkey", "text", (col) => col.notNull())
    .addColumn("indcollation", "text", (col) => col.notNull())
    .addColumn("indclass", "text", (col) => col.notNull())
    .addColumn("indoption", "text", (col) => col.notNull())
    .addColumn("indexprs", "text")
    .addColumn("indpred", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_index").execute();
}