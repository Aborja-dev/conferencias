import { eq } from "drizzle-orm";
import { db, TalksTable, usersTable } from "../db/schema";
import type { Talks } from "../../db/types";

const showALlTalks = async () => {
    const talks = await db.select().from(TalksTable);
    return talks;
}
export type AdminTalk = Talks & { user: { id: number, name: string, email: string } }   
const getTalksWithUsers = async (): Promise<AdminTalk[]> => {
    const rows = await db
        .select()
        .from(TalksTable)
        .innerJoin(usersTable, eq(TalksTable.user_id, usersTable.id));
    const talks = rows.map(row => {
        return {
            ...row.talks_table,
            user: {
                id: row.users_table.id,
                name: row.users_table.name,
                email: row.users_table.email
            }
        }
    })
    return talks
}
const createTalk = async (input: {
    name: string,
    date: string,
    description: string
}) => {
    const result = await db.insert(TalksTable).values([{
        name: input.name,
        date: input.date,
        description: input.description,
        state: 'Pendiente',
        user_id: 1
    }])
    return result
}
const updateStatus = async (id: number, status: string) => {
    const result = await db.update(TalksTable)
        .set({ state: status })
        .where(eq(TalksTable.id, id));
    console.log('result', result);
    
};

export const Speaker = {
    showALlTalks,
    createTalk
}

export const Admin = {
    getTalksWithUsers,
    updateStatus
}