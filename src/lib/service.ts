import { db, eq, TalksTable } from "astro:db";

export const updateStatus = async (id: number, status: string) => {
    const result = await db.update(TalksTable)
        .set({ state: status })
        .where(eq(TalksTable.id, id));
    console.log(result);
};