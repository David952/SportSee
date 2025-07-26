import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

function Score({ score }) {
	const data = [
		{
			name: "Score",
			value: score,
			fill: "#FF0000",
		},
		{
			name: "",
			value: 1,
			fill: "transparent",
		},
	];

	return (
		<div className="relative w-full h-full">
			<h2 className="absolute start-0 top-4 left-5 font-medium">Score</h2>
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart
					innerRadius="70%"
					outerRadius="80%"
					barSize={10}
					data={data}
					startAngle={90}
					endAngle={450}
				>
					<RadialBar minAngle={15} background clockWise dataKey="value" cornerRadius={10} />
				</RadialBarChart>
			</ResponsiveContainer>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
				<p className="text-2xl font-bold">{data[0].value * 100}%</p>
				<p className="text-base text-grey">de votre objectif</p>
			</div>
		</div>
	);
}

export default Score;
