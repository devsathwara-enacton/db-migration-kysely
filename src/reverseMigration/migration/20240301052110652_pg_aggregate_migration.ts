import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("pg_aggregate")
    .addColumn("aggfnoid", "text", (col) => col.primaryKey().notNull())
    .addColumn("aggkind", "char", (col) => col.notNull())
    .addColumn("aggnumdirectargs", "int2", (col) => col.notNull())
    .addColumn("aggtransfn", "text", (col) => col.notNull())
    .addColumn("aggfinalfn", "text", (col) => col.notNull())
    .addColumn("aggcombinefn", "text", (col) => col.notNull())
    .addColumn("aggserialfn", "text", (col) => col.notNull())
    .addColumn("aggdeserialfn", "text", (col) => col.notNull())
    .addColumn("aggmtransfn", "text", (col) => col.notNull())
    .addColumn("aggminvtransfn", "text", (col) => col.notNull())
    .addColumn("aggmfinalfn", "text", (col) => col.notNull())
    .addColumn("aggfinalextra", "boolean", (col) => col.notNull())
    .addColumn("aggmfinalextra", "boolean", (col) => col.notNull())
    .addColumn("aggfinalmodify", "char", (col) => col.notNull())
    .addColumn("aggmfinalmodify", "char", (col) => col.notNull())
    .addColumn("aggsortop", "text", (col) => col.notNull())
    .addColumn("aggtranstype", "text", (col) => col.notNull())
    .addColumn("aggtransspace", "integer", (col) => col.notNull())
    .addColumn("aggmtranstype", "text", (col) => col.notNull())
    .addColumn("aggmtransspace", "integer", (col) => col.notNull())
    .addColumn("agginitval", "text")
    .addColumn("aggminitval", "text")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("pg_aggregate").execute();
}