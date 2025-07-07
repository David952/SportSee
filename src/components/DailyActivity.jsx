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

function DailyActivity({ activity }) {
	const dailyActivityData = activity.data.sessions.map((session, index) => ({
		...session,
		day: index + 1,
	}));

	return (
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
				<Tooltip />
				<Legend iconType="circle" iconSize={8} align="right" verticalAlign="top" />
				<Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
				<Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} />
			</BarChart>
		</ResponsiveContainer>
	);
}

export default DailyActivity;
