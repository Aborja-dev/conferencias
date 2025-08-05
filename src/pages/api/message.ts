import type { APIRoute } from "astro";
import { createResponse } from "../../lib/helpers";

export const POST: APIRoute = async ({ request }) => {
    const body = await request.json();
    
    return createResponse({
        data: body
    });
}