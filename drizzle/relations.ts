import { relations } from "drizzle-orm/relations";
import { usersTable, talksTable } from "./schema";

export const talksTableRelations = relations(talksTable, ({one}) => ({
	usersTable: one(usersTable, {
		fields: [talksTable.userId],
		references: [usersTable.id]
	}),
}));

export const usersTableRelations = relations(usersTable, ({many}) => ({
	talksTables: many(talksTable),
}));