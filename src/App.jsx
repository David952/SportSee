import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

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
				</main>
			</div>
		</>
	);
}

export default App;
