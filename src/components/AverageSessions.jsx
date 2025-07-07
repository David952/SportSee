import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

function AverageSessions({ averageSessions }) {
	const averageSessionsData = averageSessions.data.sessions.map((session) => ({
		day: session.day,
		sessionLength: session.sessionLength,
	}));
	return (
		<ResponsiveContainer width="100%" height="100%" className={"center"}>
			<LineChart
				width={300}
				height={100}
				data={averageSessionsData}
				margin={{ top: 40, right: 15, bottom: 50, left: 5 }}
			>
				<Line type="natural" dataKey="sessionLength" stroke="#8884d8" strokeWidth={2} dot={false} />
				<XAxis dataKey="day" axisLine={false} tickLine={false} />
				<Tooltip />
			</LineChart>
		</ResponsiveContainer>
	);
}
export default AverageSessions;
