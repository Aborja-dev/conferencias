import { between, eq } from "drizzle-orm";
import { db, messageTable, TalksTable, usersTable } from "../db/schema";
import type { IMessage, TalkSchema } from "../db/type";
import { getTalk, getTalksWithUsers, showALlTalks } from "./service/getTalk";



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


const createMessage = async ({
    userId,
    message,
    talkId
}: IMessage) => {
    console.log("llego al sevice  ");
    
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
        
        const date = new Date(+message_table.created_at).toLocaleDateString();
        const time = new Date(+message_table.created_at).toLocaleTimeString();
        return {
            message: message_table.message,
            name: users_table.name,
            date: `${date} ${time}`
        }
    })
    .reverse()
    return messages
}
const filterByDuration = async (min: number, max: number) => {
    const result = await db
        .select()
        .from(TalksTable)
        .where(between(TalksTable.duration, min, max));
}

const Common = {
    filterByDuration,
    createMessage
}

export const Speaker = {
    ...Common,
    showALlTalks,
    createTalk,
}

export const Admin = {
    ...Common,
    getTalksWithUsers,
    updateStatus,
    getTalk,
    getMessages
}