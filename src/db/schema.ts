
import { drizzle } from 'drizzle-orm/libsql';
import { relations } from 'drizzle-orm';
import { createClient } from '@libsql/client';
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const db = drizzle("file:./local.db");

export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().notNull().unique(),
});

export const TalksTable = sqliteTable("talks_table", {
  id: int().primaryKey({ autoIncrement: true }),
  date: text().notNull(),
  name: text().notNull(),
  description: text().notNull(),
  state: text().notNull(),
  user_id: int().notNull().references(() => usersTable.id),
});

export const talkRelation = relations(TalksTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [TalksTable.user_id],
    references: [usersTable.id],
  }),
}))