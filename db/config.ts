import { column, defineDb, defineTable } from 'astro:db';
import type { Talks } from './types';


const TalksTable = defineTable({
  columns: {
    // TODO cambiar a uuid
    id: column.number({
      primaryKey: true,
      autoIncrement: true
    }),
    date: column.text(),
    name: column.text(),
    description: column.text(),
    state: column.text()
  }
})




// https://astro.build/db/config
export default defineDb({
  tables: {TalksTable}
});
