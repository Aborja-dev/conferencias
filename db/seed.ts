import { db, TalksTable, UserTable } from 'astro:db';

const talks = [
	{
		date: "2023-01-01",
		name: "Charla 1",
		description: "Descripción de la charla 1",
		state: "Aceptada"
	},
	{
		date: "2023-01-01",
		name: "Charla 2",
		description: "Descripción de la charla 2",
		state: "Rechazada"
	},
	{
		date: "2023-01-01",
		name: "Charla 3",
		description: "Descripción de la charla 3",
		state: "Aceptada"
	},
	{
		date: "2023-01-01",
		name: "Charla 4",
		description: "Descripción de la charla 4",
		state: "Aceptada"
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
		await db.insert(UserTable).values(users)
		await db.insert(TalksTable).values(talksWithUsers)
	} catch (error) {
		console.error(error)
	}
	// TODO
}
