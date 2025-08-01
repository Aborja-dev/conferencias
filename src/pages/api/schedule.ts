import type { APIRoute } from "astro";
import { verifySchedule } from "../../lib/helpers";
const createResponse = (data: any) => new Response(JSON.stringify(data), { status: 200 });
export const POST: APIRoute = async ({ request }) => {
    const body = await request.json();
    const result = await verifySchedule(body);
    return createResponse({
        data: result
    });
}