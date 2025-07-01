import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StatCards from "./components/StatCards.jsx";

import { useEffect, useState } from "react";
import { fetchUserById } from "./services/apiMock.js";

function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetchUserById(1).then(setUser);
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
