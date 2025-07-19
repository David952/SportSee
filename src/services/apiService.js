import axios from "axios";

// Création de l'instance Axios
const api = axios.create({
	baseURL: "http://localhost:3000",
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
