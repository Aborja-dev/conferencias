import { drizzle } from 'drizzle-orm/libsql';
import { relations, sql } from 'drizzle-orm';
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
  messages: many(messageTable)
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

export const talkRelation = relations(TalksTable, ({ one, many }) => ({
  user: one(usersTable, {
    fields: [TalksTable.user_id],
    references: [usersTable.id],
  }),
  messages: many(messageTable) // Agregamos esta relación
}))

export const messageTable = sqliteTable("message_table", {
  id: int().primaryKey({ autoIncrement: true }),
  message: text().notNull(),
  user_id: int().notNull().references(() => usersTable.id),
  talk_id: int().notNull().references(() => TalksTable.id),
  created_at: int('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`),
})

// AQUÍ ESTÁ LA CORRECCIÓN PRINCIPAL
export const messageRelation = relations(messageTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [messageTable.user_id],
    references: [usersTable.id],
  }),
  talk: one(TalksTable, {
    fields: [messageTable.talk_id], 
    references: [TalksTable.id],
  })
}))