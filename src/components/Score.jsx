import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

function Score({ score }) {
	const data = [
		{
			name: "Score",
			value: score * 100,
			fill: "#FF0000",
		},
	];

	return (
		<div className="relative w-full h-full">
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart
					cx="50%"
					cy="50%"
					innerRadius="70%"
					outerRadius="80%"
					barSize={10}
					data={data}
					startAngle={85}
					endAngle={220}
				>
					<RadialBar minAngle={15} background clockWise dataKey="value" cornerRadius={10} />
				</RadialBarChart>
			</ResponsiveContainer>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
				<p className="text-2xl font-bold">{data[0].value}%</p>
				<p className="text-base text-gray-400">de votre objectif</p>
			</div>
		</div>
	);
}

export default Score;
