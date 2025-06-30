import meditation from "../assets/icons/Sidebar/meditation.png";
import natation from "../assets/icons/Sidebar/natation.png";
import velo from "../assets/icons/Sidebar/velo.png";
import poids from "../assets/icons/Sidebar/poids.png";

function Sidebar() {
	return (
		<aside className="bg-black text-white w-20 flex flex-col items-center justify-center">
			<div className="flex flex-col space-y-8">
				<a href="#" aria-label="Médiation">
					<span>
						<img src={meditation} alt="Méditation" />
					</span>
				</a>
				<a href="#" aria-label="Natation">
					<span>
						<img src={natation} alt="Natation" />
					</span>
				</a>
				<a href="#" aria-label="Vélo">
					<span>
						<img src={velo} alt="Vélo" />
					</span>
				</a>
				<a href="#" aria-label="Poids">
					<span>
						<img src={poids} alt="Poids" />
					</span>
				</a>
			</div>
			<div className="text-xs pr-130 -rotate-90 whitespace-nowrap">Copyright, SportSee 2025</div>
		</aside>
	);
}

export default Sidebar;
