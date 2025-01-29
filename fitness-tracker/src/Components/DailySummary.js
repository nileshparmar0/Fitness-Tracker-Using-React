import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function DailySummary() {
  const COLORS = ["#4caf50", "#2196f3", "#ff9800"];

  const activityData = [
    { time: "6 AM", steps: 500, calories: 20 },
    { time: "9 AM", steps: 1500, calories: 50 },
    { time: "12 PM", steps: 1000, calories: 30 },
    { time: "3 PM", steps: 2000, calories: 70 },
    { time: "6 PM", steps: 2500, calories: 90 },
    { time: "9 PM", steps: 800, calories: 20 },
  ];

  const nutritionData = [
    { name: "Protein", value: 40 },
    { name: "Carbs", value: 120 },
    { name: "Fats", value: 30 },
  ];

  const heartRateData = [
    { zone: "Rest", time: 4 },
    { zone: "Fat Burn", time: 6 },
    { zone: "Cardio", time: 3 },
    { zone: "Peak", time: 1 },
  ];

  const sleepData = { totalHours: 7, quality: "Good" };

  const achievements = [
    "Step Goal Achieved: 10,000 steps",
    "Longest Active Period: 3 hours",
    "Hydration Goal: 2L Water",
  ];

  const suggestions = [
    "Increase your step count during the afternoon.",
    "Drink at least 1 more liter of water.",
    "Consider adding 15 minutes of stretching exercises.",
  ];

  return (
    <div className="daily-summary">
      <h2>Daily Summary</h2>

      {/* Graphs Section */}
      <div className="graphs-row">
        {/* Step Count Over Time */}
        <div className="graph-card">
          <h3>Step Count Over Time</h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="steps"
                stroke="#4caf50"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Nutrition Overview */}
        <div className="graph-card">
          <h3>Nutrition Overview</h3>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={nutritionData}
                cx="50%"
                cy="50%"
                outerRadius={140}
                innerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(1)}%`
                }
                paddingAngle={5}
              >
                {nutritionData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [`${value}g`, name]} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="graphs-row">
        {/* Heart Rate Zones */}
        <div className="graph-card">
          <h3>Heart Rate Zones</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={heartRateData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="zone" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="time" fill="#2196f3" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Sleep Quality */}
        <div className="graph-card">
          <h3>Sleep Quality</h3>
          <p>Total Hours: {sleepData.totalHours}</p>
          <p>Quality: {sleepData.quality}</p>
        </div>
      </div>

      {/* Achievements */}
      <div className="summary-card">
        <h3>Achievements</h3>
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>

      {/* Suggestions */}
      <div className="summary-card">
        <h3>Suggestions for Tomorrow</h3>
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DailySummary;
