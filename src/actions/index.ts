import { defineAction } from 'astro:actions';
import { Speaker } from '../lib/service';
import { z } from 'astro:content';


export const server = {
  createTalk: defineAction({
    accept: "form",
    input: z.object({
      name: z.string(),
      date: z.string(),
      description: z.string(),
    }),
    handler: async (input) => {
     const result = await Speaker.createTalk(input)
     return {
       status: 200,
       ok: true
     }
    }
  })
}