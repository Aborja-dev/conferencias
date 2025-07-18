import type { APIRoute } from "astro";
import { Admin } from "../../lib/service";

export const PUT: APIRoute = async ({ request }) => {
    const { id, status } = await request.json();
    try {
        await Admin.updateStatus(Number(id), status);
        return new Response(JSON.stringify({
            ok: true,
            message: 'Status updated successfully'
        }));
    } catch (error) {
        return new Response(JSON.stringify({
            ok: false,
            message: "Error updating status"
        }), { status:400 });
    }
};