import { db, TalksTable, usersTable } from './schema';

const talks = [
   {
   	date: "2023-01-15",
   	name: "Introducción a React",
   	description: "Fundamentos básicos de React para principiantes",
   	state: "Aceptada"
   },
   {
   	date: "2023-02-10",
   	name: "Node.js Avanzado",
   	description: "Técnicas avanzadas de desarrollo backend con Node.js",
   	state: "Rechazada"
   },
   {
   	date: "2023-02-25",
   	name: "CSS Grid y Flexbox",
   	description: "Domina los sistemas de layout modernos de CSS",
   	state: "Aceptada"
   },
   {
   	date: "2023-03-08",
   	name: "MongoDB para Desarrolladores",
   	description: "Base de datos NoSQL y mejores prácticas",
   	state: "Pendiente"
   },
   {
   	date: "2023-03-22",
   	name: "JavaScript ES6+",
   	description: "Características modernas de JavaScript",
   	state: "Aceptada"
   },
   {
   	date: "2023-04-05",
   	name: "Testing con Jest",
   	description: "Pruebas unitarias y de integración",
   	state: "Aceptada"
   },
   {
   	date: "2023-04-18",
   	name: "Docker para Desarrolladores",
   	description: "Contenedores y orquestación básica",
   	state: "Rechazada"
   },
   {
   	date: "2023-05-03",
   	name: "Vue.js Fundamentals",
   	description: "Introducción al framework Vue.js",
   	state: "Aceptada"
   },
   {
   	date: "2023-05-17",
   	name: "APIs RESTful",
   	description: "Diseño y desarrollo de APIs REST",
   	state: "Pendiente"
   },
   {
   	date: "2023-06-01",
   	name: "TypeScript Esencial",
   	description: "JavaScript tipado para aplicaciones robustas",
   	state: "Aceptada"
   },
   {
   	date: "2023-06-15",
   	name: "Git y GitHub",
   	description: "Control de versiones y colaboración",
   	state: "Aceptada"
   },
   {
   	date: "2023-07-02",
   	name: "Webpack Configuration",
   	description: "Configuración avanzada de bundlers",
   	state: "Rechazada"
   },
   {
   	date: "2023-07-20",
   	name: "Progressive Web Apps",
   	description: "Desarrollo de PWAs modernas",
   	state: "Aceptada"
   },
   {
   	date: "2023-08-05",
   	name: "GraphQL Basics",
   	description: "Alternativa moderna a REST APIs",
   	state: "Pendiente"
   },
   {
   	date: "2023-08-18",
   	name: "Sass y Preprocessing",
   	description: "CSS con superpoderes usando Sass",
   	state: "Aceptada"
   },
   {
   	date: "2023-09-01",
   	name: "Express.js Deep Dive",
   	description: "Framework web para Node.js",
   	state: "Aceptada"
   },
   {
   	date: "2023-09-15",
   	name: "Deployment Strategies",
   	description: "Estrategias de despliegue modernas",
   	state: "Rechazada"
   },
   {
   	date: "2023-10-03",
   	name: "React Native Intro",
   	description: "Desarrollo móvil con React Native",
   	state: "Aceptada"
   },
   {
   	date: "2023-10-20",
   	name: "Web Security",
   	description: "Seguridad en aplicaciones web",
   	state: "Pendiente"
   },
   {
   	date: "2023-11-05",
   	name: "Performance Optimization",
   	description: "Optimización de rendimiento en aplicaciones web",
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
