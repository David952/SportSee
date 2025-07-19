import caloriesIcon from "../assets/icons/calories.png";
import proteinsIcon from "../assets/icons/proteins.png";
import glucidesIcon from "../assets/icons/glucides.png";
import lipidesIcon from "../assets/icons/lipides.png";

const StatCard = ({ icon, value, unit, label }) => (
	<article
		className="bg-[#FBFBFB] h-[124px] w-[258px] p-4 rounded-lg flex items-center space-x-4"
		aria-label={`${label}: ${value}${unit}`}
	>
		<span>{icon}</span>
		<div>
			<p className="text-xl font-bold text-gray-900">
				{value}
				<span className="text-sm font-normal">{unit}</span>
			</p>
			<p className="text-sm text-grey">{label}</p>
		</div>
	</article>
);

const StatCards = ({ data }) => {
	const stats = [
		{
			icon: <img src={caloriesIcon} alt="Calories" className="w-15 h-15" />,
			value: data.calories,
			unit: "kCal",
			label: "Calories",
		},
		{
			icon: <img src={proteinsIcon} alt="Protéines" className="w-15 h-15" />,
			value: data.proteins,
			unit: "g",
			label: "Protéines",
		},
		{
			icon: <img src={glucidesIcon} alt="Glucides" className="w-15 h-15" />,
			value: data.carbs,
			unit: "g",
			label: "Glucides",
		},
		{
			icon: <img src={lipidesIcon} alt="Lipides" className="w-15 h-15" />,
			value: data.fats,
			unit: "g",
			label: "Lipides",
		},
	];

	return (
		<div className="flex flex-wrap min-2xl:flex-col min-2xl:gap-18 min-lg:flex-row min-lg:gap-15 min-lg:mt-[70px]">
			{stats.map((stat, index) => (
				<StatCard
					key={index}
					icon={stat.icon}
					value={stat.value}
					unit={stat.unit}
					label={stat.label}
				/>
			))}
		</div>
	);
};

export default StatCards;
