import { column, defineDb, defineTable } from 'astro:db';



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
    state: column.text(),
    user_id: column.number({
      references: () => UserTable.columns.id
    })
  }
})

const UserTable = defineTable({
  columns: {
    id: column.number({
      primaryKey: true,
      autoIncrement: true
    }),
    name: column.text(),
    email: column.text(),
  }
})


// https://astro.build/db/config
export default defineDb({
  tables: {TalksTable, UserTable}
});
