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
} from "./services/apiMock.js";

function App() {
	const [user, setUser] = useState(null);
	const [activity, setActivity] = useState(null);
	const [averageSessions, setAverageSessions] = useState(null);
	const [performance, setPerformance] = useState(null);

	useEffect(() => {
		fetchUserById(1).then(setUser);
		fetchUserActivityById(1).then(setActivity);
		fetchUserAverageSessionsById(1).then(setAverageSessions);
		fetchUserPerformanceById(1).then((data) => setPerformance(data));
	}, []);

	return (
		<>
			<Header />
			<div className="flex">
				<Sidebar />

				<main className="h-screen">
					<h1 className="text-3xl font-bold mb-4">
						Bonjour
						{user && <span className="text-red-500"> {user.data.userInfos.firstName}</span>}
					</h1>
					<p className="text-gray-600 mb-8">
						Félicitations ! Vous avez explosé vos objectifs hier 👏
					</p>
					<div className="flex">
						<div className="flex flex-col mr-8">
							<div className="bg-[#FBFBFB] h-[320px] w-[835px] mb-7">
								<h2>Activité quotidienne</h2>
								{activity ? <DailyActivity activity={activity} /> : "Chargement..."}
							</div>
							<div className="flex justify-between">
								<div className="bg-[#FBFBFB] h-[263px] w-[258px]">
									<h2>Durée moyenne des sessions</h2>
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
									<h2>Score</h2>
									{user ? <Score score={user.data.todayScore} /> : "Chargement..."}
								</div>
							</div>
						</div>
						{user && (
							<StatCards
								data={{
									calories: user.data.keyData.calories,
									proteins: user.data.keyData.proteins,
									carbs: user.data.keyData.carbs,
									fats: user.data.keyData.fats,
								}}
							/>
						)}
					</div>
				</main>
			</div>
		</>
	);
}

export default App;
