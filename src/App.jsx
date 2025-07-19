import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StatCards from "./components/StatCards.jsx";
import DailyActivity from "./components/DailyActivity.jsx";
import AverageSessions from "./components/AverageSessions.jsx";
import Performance from "./components/Performance.jsx";
import Score from "./components/Score.jsx";

import { useEffect, useState } from "react";
import {
	fetchUserById,
	fetchUserActivityById,
	fetchUserAverageSessionsById,
	fetchUserPerformanceById,
} from "./services/apiService.js";

function App() {
	const [userId, setUserId] = useState(12);
	const [user, setUser] = useState(null);
	const [activity, setActivity] = useState(null);
	const [averageSessions, setAverageSessions] = useState(null);
	const [performance, setPerformance] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const userData = await fetchUserById(userId);
				setUser(userData);

				const activityData = await fetchUserActivityById(userId);
				setActivity(activityData);

				const sessionsData = await fetchUserAverageSessionsById(userId);
				setAverageSessions(sessionsData);

				const performanceData = await fetchUserPerformanceById(userId);
				setPerformance(performanceData);
			} catch (err) {
				setError(err.message);
				console.error("Erreur lors de la récupération des données:", err);
			}
		};

		fetchData();
	}, [userId]);

	const handleUserChange = () => {
		// Alterner entre les IDs disponibles (12 et 18)
		setUserId((prevId) => (prevId === 12 ? 18 : 12));
	};

	return (
		<div className="font-roboto">
			<Header />
			<div className="flex">
				<Sidebar />

				<main className="w-[100%] m-14">
					<h1 className="text-3xl font-bold mb-4">
						Bonjour
						{user && (
							<span
								className="text-red-500 cursor-pointer"
								onClick={handleUserChange}
								title="Changer d'utilisateur"
							>
								{" "}
								{user.data.userInfos.firstName}
							</span>
						)}
					</h1>
					<p className="text-gray-600 mb-8">
						Félicitations ! Vous avez explosé vos objectifs hier 👏
					</p>
					<div className="flex flex-wrap">
						<div className="flex flex-col mr-8 flex-1">
							<div className="h-[320px] w-[100%] mb-33">
								{activity ? <DailyActivity activity={activity} /> : "Chargement..."}
							</div>
							<div className="flex justify-between">
								<div className="h-[263px] w-[258px] bg-[#FF0000] rounded-md">
									{averageSessions ? (
										<AverageSessions averageSessions={averageSessions} />
									) : (
										"Chargement..."
									)}
								</div>
								<div className="bg-[#FBFBFB] h-[263px] w-[258px]">
									{performance ? (
										<Performance data={performance.data.data} kind={performance.data.kind} />
									) : (
										"Chargement..."
									)}
								</div>
								<div className="bg-[#FBFBFB] h-[263px] w-[258px]">
									{user ? (
										<Score score={user.data.todayScore || user.data.score} />
									) : (
										"Chargement..."
									)}
								</div>
							</div>
						</div>
						{user && (
							<StatCards
								data={{
									calories: user.data.keyData.calorieCount,
									proteins: user.data.keyData.proteinCount,
									carbs: user.data.keyData.carbohydrateCount,
									fats: user.data.keyData.lipidCount,
								}}
							/>
						)}
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
