import { defineAction } from 'astro:actions';
import { Speaker } from '../lib/service';
import { z } from 'astro:content';
import { duration } from 'drizzle-orm/gel-core';


export const server = {
  createTalk: defineAction({
    accept: "form",
    input: z.object({
      name: z.string(),
      date: z.string(),
      description: z.string(),
      hour: z.string(),
      duration: z.string()
    }),
    handler: async (input) => {
     const { name, date, description, hour, duration } = input
     await Speaker.createTalk({
       name,
       date: new Date(date).getTime(),
       description,
       hour: new Date(`${date} ${hour}`).getTime(),
       duration: Number(duration)
     })
     return {
       status: 200,
       ok: true
     }
    }
  })
}