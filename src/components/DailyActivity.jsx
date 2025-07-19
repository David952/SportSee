import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
	if (active && payload) {
		return (
			<div className="bg-red-500 text-white text-xs p-2 text-center">
				<p className="mb-6">{payload[0].value}kg</p>
				<p>{payload[1].value}Kcal</p>
			</div>
		);
	}
	return null;
};

const CustomLegend = ({ payload }) => {
	// Forcer l'ordre
	const order = ["kilogram", "calories"];
	const ordered = order.map((key) => payload.find((item) => item.dataKey === key)).filter(Boolean);

	return (
		<ul className="flex gap-4 justify-end pr-8 pt-4 text-sm">
			{ordered.map((entry, index) => (
				<li key={index} className="flex items-center gap-2">
					<span
						className="inline-block w-2 h-2 rounded-full"
						style={{ backgroundColor: entry.color }}
					/>
					{entry.value}
				</li>
			))}
		</ul>
	);
};

function DailyActivity({ activity }) {
	const dailyActivityData = activity.data.sessions.map((session, index) => ({
		...session,
		day: index + 1,
	}));

	return (
		<>
			<h2 className="mt-6 ml-8 font-medium">Activité quotidienne</h2>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					width={500}
					height={300}
					data={dailyActivityData}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
					barSize={7}
					barGap={9}
				>
					<CartesianGrid strokeDasharray="3 3" vertical={false} />
					<XAxis dataKey="day" axisLine={false} tickLine={false} />
					<YAxis orientation="right" axisLine={false} tickLine={false} />
					<Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(196, 196, 196, 0.5)" }} />
					<Legend
						align="right"
						content={<CustomLegend />}
						wrapperStyle={{ marginBottom: "50px", margin: 0, position: "static" }}
					/>
					<Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} name="Poids (kg)" />
					<Bar
						dataKey="calories"
						fill="#E60000"
						radius={[10, 10, 0, 0]}
						name="Calories brûlées (kCal)"
					/>
				</BarChart>
			</ResponsiveContainer>
		</>
	);
}

export default DailyActivity;
