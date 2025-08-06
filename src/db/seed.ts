import { db, messageTable, TalksTable, usersTable } from './schema';
import type { ForInsertTalk, IMessage } from './type';

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
   },
   // AGREGUÉ UN TALK MÁS PARA QUE EXISTA talk_id: 7
   {
   	date: editDate("2023-04-01", "13:00:00").date,
   	name: "TypeScript Avanzado",
   	description: "Tipos avanzados y mejores prácticas",
   	state: "Aceptada",
   	user_id: 1,
   	hour: editDate("2023-04-01", "13:00:00").hour,
   	duration: 30
   }
]

const users = [
	{
		name: "Roberto",
		email: "roberto@email.com" // CORREGIDO: emails válidos
	},
	{
		name: "Luis",
		email: "luis@email.com"
	},
	{
		name: "Andres",
		email: "andres@email.com"
	},
	{
		name: "Pablo",
		email: "pablo@email.com"
	},
	{
		name: "Santiago",
		email: "santiago@email.com"
	}
]

// CORREGIDO: Cambié talk_id de algunos mensajes para que no excedan el número de talks
const messages = [
   {
   	message: "Hola",
   	user_id: 1,
   	talk_id: 1
   },
   {
   	message: "¿Cómo estás?",
   	user_id: 2,
   	talk_id: 1
   },
   {
   	message: "Todo bien, gracias",
   	user_id: 1,
   	talk_id: 1
   },
   {
   	message: "¿Qué tal el trabajo?",
   	user_id: 3,
   	talk_id: 1
   },
   {
   	message: "Muy ocupado últimamente",
   	user_id: 4,
   	talk_id: 1
   },
   {
   	message: "¡Hola equipo!",
   	user_id: 5,
   	talk_id: 2
   },
   {
   	message: "Buenos días",
   	user_id: 1,
   	talk_id: 2
   },
   {
   	message: "¿Listos para la reunión?",
   	user_id: 2,
   	talk_id: 3
   },
   {
   	message: "Sí, cuando quieras",
   	user_id: 3,
   	talk_id: 3
   },
   {
   	message: "Perfecto",
   	user_id: 2,
   	talk_id: 3
   },
   {
   	message: "¿Alguien vio el partido?",
   	user_id: 4,
   	talk_id: 4
   },
   {
   	message: "Estuvo increíble",
   	user_id: 5,
   	talk_id: 4
   },
   {
   	message: "No pude verlo",
   	user_id: 1,
   	talk_id: 4
   },
   {
   	message: "¿Pedimos pizza?",
   	user_id: 2,
   	talk_id: 5
   },
   {
   	message: "Buena idea",
   	user_id: 3,
   	talk_id: 5
   },
   {
   	message: "Yo quiero hawaiana",
   	user_id: 4,
   	talk_id: 6
   },
   {
   	message: "¿Qué tal pepperoni?",
   	user_id: 5,
   	talk_id: 6
   },
   {
   	message: "Necesito ayuda con el código",
   	user_id: 1,
   	talk_id: 7 // Ahora existe talk_id: 7
   },
   {
   	message: "¿En qué te ayudo?",
   	user_id: 2,
   	talk_id: 7
   },
   {
   	message: "Gracias, ya lo resolví",
   	user_id: 1,
   	talk_id: 7
   }
]

export default async function seed() {
	const talksWithUsers = talks.map(talk => {
		return {
			...talk,
			user_id: 1
		}
	})
	try {
		// CORREGIDO: Eliminar en orden inverso por las foreign keys
		await db.delete(messageTable).execute()
		await db.delete(TalksTable).execute()
		await db.delete(usersTable).execute()
		
		// Insertar en el orden correcto
		await db.insert(usersTable).values(users)
		await db.insert(TalksTable).values(talksWithUsers)
		//await db.insert(messageTable).values(messages)
		
		console.log("Seed completado exitosamente")
	} catch (error) {
		console.error("Error en seed:", error)
	}
}

seed()