import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import ExerciseLog from "./Components/ExerciseLog";
import MealTracker from "./Components/MealTracker";
import WaterTracker from "./Components/WaterTracker";
import DailySummary from "./Components/DailySummary";
import DashboardWidgets from "./Components/DashboardWidgets";
import Goals from "./Components/Goals";
import InteractiveCharts from "./Components/InteractiveCharts";
import Notifications from "./Components/Notifications";
import OverallProgress from "./Components/OverallProgress";
import Reminders from "./Components/Reminders";
import WearableSync from "./Components/WearableSync";
import "./App.css"; // Ensure CSS is properly linked

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`app-container ${darkMode ? "dark" : ""}`}>
        <header>
          <h1>Fitness Tracker</h1>
        </header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/exercises" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Exercise Log
              </NavLink>
            </li>
            <li>
              <NavLink to="/meals" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Meal Tracker
              </NavLink>
            </li>
            <li>
              <NavLink to="/water" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Water Tracker
              </NavLink>
            </li>
            <li>
              <NavLink to="/summary" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Daily Summary
              </NavLink>
            </li>
            <li>
              <NavLink to="/goals" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Set Goals
              </NavLink>
            </li>
            <li>
              <NavLink to="/reminders" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Reminders
              </NavLink>
            </li>
          </ul>
        </nav>
        <main className="container">
          <Routes>
            <Route path="/" element={<Dashboard darkMode={darkMode} toggleTheme={toggleTheme} />} />
            <Route path="/exercises" element={<ExerciseLog darkMode={darkMode} />} />
            <Route path="/meals" element={<MealTracker darkMode={darkMode} />} />
            <Route path="/water" element={<WaterTracker darkMode={darkMode} />} />
            <Route path="/summary" element={<DailySummary darkMode={darkMode} />} />
            <Route path="/goals" element={<Goals darkMode={darkMode} />} />
            <Route path="/reminders" element={<Reminders darkMode={darkMode} />} />
            <Route path="/notifications" element={<Notifications darkMode={darkMode} />} />
            <Route path="/progress" element={<OverallProgress darkMode={darkMode} />} />
            <Route path="/widgets" element={<DashboardWidgets darkMode={darkMode} />} />
            <Route path="/interactive-charts" element={<InteractiveCharts darkMode={darkMode} />} />
            <Route path="/wearable-sync" element={<WearableSync darkMode={darkMode} />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2025 Fitness Tracker. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
