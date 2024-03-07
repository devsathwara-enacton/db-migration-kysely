import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable("templates")
    .addColumn("id", "integer", (col) => col.primaryKey().notNull().defaultTo(sql<any>`nextval('templates_id_seq'::regclass)`))
    .addColumn("user_id", "text", (col) => col.notNull())
    .addColumn("deleted_at", "timestamptz", (col) => col.defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .addColumn("created_at", "timestamptz", (col) => col.defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .addColumn("updated_at", "timestamptz", (col) => col.defaultTo(sql<any>`CURRENT_TIMESTAMP`))
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("templates").execute();
}