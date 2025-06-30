import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// Création de l'instance Axios
const api = axios.create({
	baseURL: "http://localhost:3000",
});

// Création du mock
const mock = new MockAdapter(api, { delayResponse: 500 });

// Exemple de mock pour GET /user
mock.onGet("/user/1").reply(200, {
	data: {
		id: 1,
		userInfos: {
			firstName: "Thomas",
			lastName: "Dupont",
			age: 31,
		},
		todayScore: 0.25,
		keyData: {
			calories: 1930,
			proteins: 155,
			carbs: 290,
			fats: 50,
		},
	},
});

// Mock pour GET /user/1/activity
mock.onGet("/user/1/activity").reply(200, {
	data: {
		userId: 1,
		sessions: [
			{ day: "2020-07-01", kilogram: 83, calories: 260 },
			{ day: "2020-07-02", kilogram: 83, calories: 230 },
			{ day: "2020-07-03", kilogram: 84, calories: 290 },
			{ day: "2020-07-04", kilogram: 84, calories: 270 },
			{ day: "2020-07-05", kilogram: 82, calories: 150 },
			{ day: "2020-07-06", kilogram: 79, calories: 152 },
			{ day: "2020-07-07", kilogram: 78, calories: 370 },
		],
	},
});

// Mock pour GET /user/1/average-sessions
mock.onGet("/user/1/average-sessions").reply(200, {
	data: {
		userId: 1,
		sessions: [
			{ day: "L", sessionLength: 35 },
			{ day: "Mar", sessionLength: 25 },
			{ day: "Mer", sessionLength: 50 },
			{ day: "J", sessionLength: 60 },
			{ day: "V", sessionLength: 30 },
			{ day: "S", sessionLength: 40 },
			{ day: "D", sessionLength: 0 },
		],
	},
});

// Mock pour GET /user/1/performance
mock.onGet("/user/1/performance").reply(200, {
	data: {
		userId: 1,
		kind: {
			1: "Intensité",
			2: "Vitesse",
			3: "Force",
			4: "Endurance",
			5: "Energie",
			6: "Cardio",
		},
		data: [
			{ value: 110, kind: 1 },
			{ value: 100, kind: 2 },
			{ value: 140, kind: 3 },
			{ value: 80, kind: 4 },
			{ value: 170, kind: 5 },
			{ value: 85, kind: 6 },
		],
	},
});

// Fonction pour récupérer un utilisateur par ID
export const fetchUserById = async (id) => {
	const response = await api.get(`/user/${id}`);
	return response.data;
};

// Fonction pour récupérer l'activité d'un utilisateur par ID
export const fetchUserActivityById = async (id) => {
	const response = await api.get(`/user/${id}/activity`);
	return response.data;
};

// Fonction pour récupérer les sessions moyennes d'un utilisateur par ID
export const fetchUserAverageSessionsById = async (id) => {
	const response = await api.get(`/user/${id}/average-sessions`);
	return response.data;
};

// Fonction pour récupérer la performance d'un utilisateur par ID
export const fetchUserPerformanceById = async (id) => {
	const response = await api.get(`/user/${id}/performance`);
	return response.data;
};
