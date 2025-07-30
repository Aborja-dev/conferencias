import { db, TalksTable, usersTable } from './schema';
import type { ForInsertTalk } from './type';

const editDate = (date:string, time:string) => {
	const newDate = new Date(date).getTime();
	const _time = new Date(`${date} ${time}`).getTime();
	return {
		date: newDate,
		hour: _time
	}
}

const talks: ForInsertTalk[] = [
   {
   	date: editDate("2023-01-01", "10:00:00").date,
   	name: "Introducción a React",
   	description: "Fundamentos básicos de React para principiantes",
   	state: "Aceptada",
   	user_id: 1,
   	hour: editDate("2023-01-01", "10:00:00").hour,
   	duration: 30
   },
   {
   	date: editDate("2023-01-15", "14:30:00").date,
   	name: "Node.js y Express",
   	description: "Desarrollo web con Node.js y Express",
   	state: "Pendiente",
   	user_id: 1,
   	hour: editDate("2023-01-15", "14:30:00").hour,
   	duration: 30
   },
   {
   	date: editDate("2023-02-01", "09:00:00").date,
   	name: "CSS Grid y Flexbox",
   	description: "Domina los sistemas de layout modernos de CSS",
   	state: "Aceptada",
   	user_id: 1,
   	hour: editDate("2023-02-01", "09:00:00").hour,
   	duration: 30
   },
   {
   	date: editDate("2023-02-15", "15:30:00").date,
   	name: "MongoDB para Desarrolladores",
   	description: "Base de datos NoSQL y mejores prácticas",
   	state: "Pendiente",
   	user_id: 1,
   	hour: editDate("2023-02-15", "15:30:00").hour,
   	duration: 30
   },
   {
   	date: editDate("2023-03-01", "11:00:00").date,
   	name: "JavaScript ES6+",
   	description: "Características modernas de JavaScript",
   	state: "Aceptada",
   	user_id: 1,
   	hour: editDate("2023-03-01", "11:00:00").hour,
   	duration: 30
   },
   {
   	date: editDate("2023-03-15", "16:30:00").date,
   	name: "Git y GitHub",
   	description: "Control de versiones y colaboración en proyectos",
   	state: "Pendiente",
   	user_id: 1,
   	hour: editDate("2023-03-15", "16:30:00").hour,
   	duration: 30
   }
]

const users = [
	{
		name: "Roberto",
		email: "roberto.com"
	}
]


// https://astro.build/db/seed
export default async function seed() {
	const talksWithUsers = talks.map(talk => {
		return {
			...talk,
			user_id: 1
		}
	})
	try {
		await db.delete(TalksTable).execute()
		await db.delete(usersTable).execute()
		await db.insert(usersTable).values(users)
		await db.insert(TalksTable).values(talksWithUsers)
	} catch (error) {
		console.error(error)
	}
	// TODO
}

seed()
