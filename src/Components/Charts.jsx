import { PieChart, Pie, Cell, AreaChart, Area, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export function PieChartComponent() {
    const data = [
      { name: "RABBIT", value: 75, color: "#fe971e" },
      { name: "Segment B", value: 10, color: "#3399FF" },
      { name: "Segment C", value: 7, color: "#FF66B2" },
      { name: "Segment D", value: 5, color: "#AA00FF" },
      { name: "Segment E", value: 3, color: "#6633CC" },
    ];
  
    return (
      <div className="flex flex-col items-center bg-black min-h-screen justify-center">
        <h2 className="text-white text-3xl font-bold mb-6">PostEx Market Share</h2>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <ResponsiveContainer width={300} height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={5}
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
  
  // Custom Tooltip Component
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black text-white p-2 rounded-md shadow-md border border-gray-700">
          <p className="font-bold">{payload[0].name}</p>
          <p className="flex items-center">
            <span className="w-3 h-3 inline-block mr-2" style={{ backgroundColor: payload[0].payload.color }}></span>
            {`${payload[0].name}: ${payload[0].value}`}
          </p>
        </div>
      );
    }
    return null;
  };

export function LineChartComponent() {
    const data = [
        { name: "Jan", value: 10 },
        { name: "Feb", value: 25 },
        { name: "Mar", value: 15 },
        { name: "Apr", value: 30 },
        { name: "May", value: 20 },
        { name: "Jun", value: 35 },
        { name: "Jul", value: 28 },
        { name: "Aug", value: 40 },
        { name: "Sep", value: 38 },
        { name: "Oct", value: 45 },
        { name: "Nov", value: 50 },
        { name: "Dec", value: 60 },
      ];
  
    return (
        <div className="flex flex-col items-center bg-black min-h-screen justify-center">
        <h2 className="text-white text-2xl font-bold mb-4">Growth</h2>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <ResponsiveContainer width={500} height={300}>
            <AreaChart data={data}>
              {/* Filled Area */}
              <Area type="monotone" dataKey="value" stroke="none" fill="#00FF99" />
  
              {/* Line with Dots */}
              <Line
                type="monotone"
                dataKey="value"
                stroke="#00FF99"
                strokeWidth={2}
                dot={{ fill: "#00FF99", strokeWidth: 2, r: 4 }} // Dots on line
              />
  
              {/* Tooltip */}
              <Tooltip
                contentStyle={{ backgroundColor: "#000", color: "#fff", borderRadius: "5px", border: "1px solid #333" }}
                itemStyle={{ color: "#00FF99" }}
                cursor={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

