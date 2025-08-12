import { eq } from "drizzle-orm";
import { db, TalksTable, topicTable, topicToTalkTable, usersTable } from "../../db/schema";
import type { TalkSchema } from "../../db/type";

export const showALlTalks = async (): Promise<TalkSchema[]> => {
    const talks = await db
        .select()
        .from(TalksTable)
        .leftJoin(topicToTalkTable, eq(TalksTable.id, topicToTalkTable.talk_id))
        .leftJoin(topicTable, eq(topicToTalkTable.topic_id, topicTable.id))
        .groupBy(TalksTable.id)
        ;
    console.log(talks);
    
    return talks.map(talk => {
        const {talks_table, topic_table} = talk
        return {
            ...talks_table,
            topics: []
        }
    });
}
export type AdminTalk = TalkSchema & { user: { id: number, name: string, email: string } }   
export const getTalksWithUsers = async (): Promise<AdminTalk[]> => {
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
export const getTalk = async (id: number) => {
    const result = await db.select().from(TalksTable).where(eq(TalksTable.id, id));
    return result[0]
}