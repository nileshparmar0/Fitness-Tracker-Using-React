import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  FaDumbbell,
  FaWater,
  FaClipboardList,
  FaClock,
  FaChartLine,
  FaFire,
  FaMoon,
  FaSun,
} from "react-icons/fa";

// Dummy Data for Charts
const progressData = [
  { date: "Mon", workouts: 2, calories: 300, water: 2000 },
  { date: "Tue", workouts: 1, calories: 250, water: 1800 },
  { date: "Wed", workouts: 3, calories: 500, water: 2200 },
  { date: "Thu", workouts: 2, calories: 450, water: 2000 },
  { date: "Fri", workouts: 1, calories: 200, water: 1500 },
  { date: "Sat", workouts: 4, calories: 600, water: 2500 },
  { date: "Sun", workouts: 2, calories: 350, water: 1900 },
];

const pieData = [
  { name: "Strength Training", value: 35 },
  { name: "Cardio", value: 40 },
  { name: "Yoga", value: 15 },
  { name: "Others", value: 10 },
];

const COLORS = ["#FF5733", "#2196F3", "#FF9800", "#8BC34A"];

function Dashboard() {
  // Theme state management
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Manage visibility of widgets
  const [widgets, setWidgets] = useState({
    progress: true,
    charts: true,
    tasks: true,
  });

  const toggleWidget = (widget) => {
    setWidgets((prevWidgets) => ({
      ...prevWidgets,
      [widget]: !prevWidgets[widget],
    }));
  };

  // Task management
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete 30 min workout", completed: false },
    { id: 2, text: "Drink 2.5L of water", completed: false },
    { id: 3, text: "Track meal intake", completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className={`dashboard-container ${darkMode ? "dark" : ""}`}>
      <h2 className="dashboard-title">🏆 Fitness Dashboard</h2>

      {/* Theme Toggle */}
      <button className="custom-btn theme-btn" onClick={toggleTheme}>
        {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Customization Settings */}
      <div className="customization-panel">
        <h3 className="custom-title">🎨 Customize Dashboard</h3>
        <button className="custom-btn settings-btn" onClick={() => toggleWidget("progress")}>
          {widgets.progress ? "Hide Progress" : "Show Progress"}
        </button>
        <button className="custom-btn settings-btn" onClick={() => toggleWidget("charts")}>
          {widgets.charts ? "Hide Charts" : "Show Charts"}
        </button>
        <button className="custom-btn settings-btn" onClick={() => toggleWidget("tasks")}>
          {widgets.tasks ? "Hide Tasks" : "Show Tasks"}
        </button>
      </div>

      {/* Progress Overview */}
      {widgets.progress && (
        <div className="progress-cards">
          <div className="card">
            <FaDumbbell className="card-icon" />
            <p>Workouts Completed</p>
            <h3>5 / 7</h3>
          </div>
          <div className="card">
            <FaChartLine className="card-icon" />
            <p>Calories Burned</p>
            <h3>2,800 kcal</h3>
          </div>
          <div className="card">
            <FaWater className="card-icon" />
            <p>Water Intake</p>
            <h3>10.5L</h3>
          </div>
          <div className="card">
            <FaClipboardList className="card-icon" />
            <p>Goals Achieved</p>
            <h3>3 / 5</h3>
          </div>
          <div className="card">
            <FaFire className="card-icon" />
            <p>🔥 7-Day Streak</p>
            <h3>Active</h3>
          </div>
        </div>
      )}

      {/* Charts Section - Now Horizontal */}
      {widgets.charts && (
        <div className="charts-row">
          {/* Progress Tracking Chart */}
          <div className="chart-container">
            <h3 className="custom-title">📊 Progress Tracking</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="workouts" stroke="#673ab7" />
                <Line type="monotone" dataKey="calories" stroke="#ff9800" />
                <Line type="monotone" dataKey="water" stroke="#2196f3" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Workout Distribution Chart */}
          <div className="chart-container">
            <h3 className="custom-title">🏋️‍♂️ Workout Type Distribution</h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Upcoming Tasks */}
      {widgets.tasks && (
        <div className="reminders">
          <h3 className="custom-title">Upcoming Tasks</h3>
          <ul>
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`task-item centered-text ${task.completed ? "completed" : ""}`}
                onClick={() => toggleTask(task.id)}
              >
                <FaClock className="task-icon" />
                {task.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
