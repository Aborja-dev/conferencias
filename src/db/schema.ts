
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

export const userRelation = relations(usersTable, ({ many }) => ({
  talks: many(TalksTable),
}))

export const TalksTable = sqliteTable("talks_table", {
  id: int().primaryKey({ autoIncrement: true }),
  date: int().notNull(),
  name: text().notNull(),
  description: text().notNull(),
  state: text().notNull(),
  user_id: int().notNull().references(() => usersTable.id),
  hour: int().notNull(),
  duration: int().notNull()
});

export const talkRelation = relations(TalksTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [TalksTable.user_id],
    references: [usersTable.id],
  }),
}))