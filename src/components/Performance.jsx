import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	ResponsiveContainer,
} from "recharts";

export default function Performance({ data, kind }) {
	const performanceData = data.map((item) => ({
		subject: kind[item.kind],
		value: item.value,
	}));

	return (
		<div className="w-full h-full bg-[#282D30] rounded-md">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart
					cx="50%"
					cy="50%"
					outerRadius="70%"
					data={performanceData}
					margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
				>
					<PolarGrid gridType="polygon" stroke="white" />
					<PolarAngleAxis
						dataKey="subject"
						stroke="white"
						tickLine={false}
						tick={{ fontSize: 12, fontWeight: 500 }}
					/>
					<PolarRadiusAxis axisLine={false} tick={false} />
					<Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} stroke="transparent" />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
}
