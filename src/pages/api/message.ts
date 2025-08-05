import type { APIRoute } from "astro";
import { createResponse } from "../../lib/helpers";
import type { IMessage } from "../../db/type";
import { z } from "astro/zod";
import { Admin } from "../../lib/service";

export const POST: APIRoute = async ({ params, request }) => {
    const body = await request.json() as IMessage;
    const bodySchema = z.object({
        message: z.string(),
        userId: z.number(),
        talkId: z.number()
    }) 
    try {
        const _body = bodySchema.parse(body);
        Admin.createMessage({
            message: _body.message,
            userId: Number(_body.userId),
            talkId: Number(_body.talkId)
        });
        return createResponse({
            data: body
        });
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 400 });
    }
    
}