import logo from "../assets/logo.png";

function Header() {
	return (
		<header className="bg-black shadow-md p-4 flex items-center">
			<span className="flex items-center">
				<img src={logo} alt="SportSee Logo" className="w-35" />
			</span>
			<nav className="flex flex-1 justify-between text-lg ml-78 mr-25">
				<a href="#" className="text-white">
					Accueil
				</a>
				<a href="#" className="text-white">
					Profil
				</a>
				<a href="#" className="text-white">
					Réglages
				</a>
				<a href="#" className="text-white">
					Communauté
				</a>
			</nav>
		</header>
	);
}

export default Header;
