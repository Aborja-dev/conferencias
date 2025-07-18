import { sqliteTable, AnySQLiteColumn, foreignKey, integer, text, uniqueIndex } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const talksTable = sqliteTable("talks_table", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	date: text().notNull(),
	name: text().notNull(),
	description: text().notNull(),
	state: text().notNull(),
	userId: integer("user_id").notNull().references(() => usersTable.id),
});

export const usersTable = sqliteTable("users_table", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	name: text().notNull(),
	email: text().notNull(),
},
(table) => [
	uniqueIndex("users_table_email_unique").on(table.email),
]);

