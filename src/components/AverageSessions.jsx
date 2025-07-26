import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	ReferenceArea,
} from "recharts";

function AverageSessions({ averageSessions }) {
	const getDayLetter = (day) => {
		const days = {
			1: "L",
			2: "M",
			3: "M",
			4: "J",
			5: "V",
			6: "S",
			7: "D",
		};
		return days[day];
	};

	const averageSessionsData = averageSessions.data.sessions.map((session) => ({
		day: getDayLetter(session.day),
		sessionLength: session.sessionLength,
	}));

	const SessionTooltip = ({ active, payload }) => {
		if (active && payload) {
			return (
				<div className="bg-white text-black text-xs px-2 py-1">
					<p>{payload[0].value} min</p>
				</div>
			);
		}
		return null;
	};

	return (
		<>
			<h2 className="text-white opacity-[0.5] w-[147px] mt-[29px] ml-[34px]">
				Durée moyenne des sessions
			</h2>
			<ResponsiveContainer width="100%" height="100%" className={"center"}>
				<LineChart
					data={averageSessionsData}
					margin={{ top: 40, right: 15, bottom: 100, left: 15 }}
				>
					<defs>
						<linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="white" stopOpacity={0.4} />
							<stop offset="100%" stopColor="white" stopOpacity={1} />
						</linearGradient>
					</defs>
					<Line
						type="natural"
						dataKey="sessionLength"
						stroke="url(#lineGradient)"
						strokeWidth={2}
						dot={false}
					/>
					<XAxis
						dataKey="day"
						axisLine={false}
						tickLine={false}
						tick={{ fill: "black", opacity: 0.6 }}
						tickMargin={20}
					/>

					<Tooltip content={<SessionTooltip />} cursor={false} />
				</LineChart>
			</ResponsiveContainer>
		</>
	);
}
export default AverageSessions;
