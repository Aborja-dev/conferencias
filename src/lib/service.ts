import { eq } from "drizzle-orm";
import { db, messageTable, TalksTable, usersTable } from "../db/schema";
import type { IMessage, TalkSchema } from "../db/type";


const showALlTalks = async () => {
    const talks = await db.select().from(TalksTable);
    return talks;
}
export type AdminTalk = TalkSchema & { user: { id: number, name: string, email: string } }   
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
    date: number,
    description: string,
    hour: number,
    duration: number
}) => {
    console.log('input', input);
    const result = await db.insert(TalksTable).values([{
        name: input.name,
        date: input.date,
        description: input.description,
        state: 'Pendiente',
        user_id: 1,
        hour: input.hour,
        duration: input.duration
    }])
    return result
}
const updateStatus = async (id: number, status: string) => {
    const result = await db.update(TalksTable)
        .set({ state: status })
        .where(eq(TalksTable.id, id));
    
};

const getTalk = async (id: number) => {
    const result = await db.select().from(TalksTable).where(eq(TalksTable.id, id));
    return result[0]
}
const createMessage = async ({
    userId,
    message,
    talkId
}: IMessage) => {
    await db.insert(messageTable).values([{
        talk_id: talkId,
        message: message,
        user_id: userId
    }])
}
const getMessages = async (talkId: number) => {
    const result = await db
        .select()
        .from(messageTable)
        .where(eq(messageTable.talk_id, talkId))
        .innerJoin(usersTable, eq(messageTable.user_id, usersTable.id))
        ;
    const messages = result.map(({message_table, users_table}) => {
        
        const date = new Date(+message_table.createdAt).toLocaleDateString();
        const time = new Date(+message_table.createdAt).toLocaleTimeString();
        return {
            message: message_table.message,
            name: users_table.name,
            date: `${date} ${time}`
        }
    })
    .reverse()
    return messages
}

export const Speaker = {
    showALlTalks,
    createTalk,
    createMessage
}

export const Admin = {
    getTalksWithUsers,
    updateStatus,
    getTalk,
    createMessage,
    getMessages
}