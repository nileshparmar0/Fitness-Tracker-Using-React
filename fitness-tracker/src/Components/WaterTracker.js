import React, { useState, useEffect } from "react";

function WaterTracker() {
  const [waterIntake, setWaterIntake] = useState(
    () => JSON.parse(localStorage.getItem("waterIntake")) || 0
  );
  const [goal, setGoal] = useState(
    () => JSON.parse(localStorage.getItem("waterGoal")) || 2000
  ); // Default goal: 2000ml
  const [reminders, setReminders] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [reminderAmount, setReminderAmount] = useState("");
  const [reminderTime, setReminderTime] = useState("");
  const [timePeriod, setTimePeriod] = useState("AM");

  useEffect(() => {
    localStorage.setItem("waterIntake", JSON.stringify(waterIntake));
    localStorage.setItem("waterGoal", JSON.stringify(goal));
  }, [waterIntake, goal]);

  const addWater = (amount) => {
    setWaterIntake(waterIntake + amount);
  };

  const removeWater = (amount) => {
    if (waterIntake >= amount) {
      setWaterIntake(waterIntake - amount);
    }
  };

  const openReminderDialog = () => {
    setShowDialog(true);
  };

  const closeReminderDialog = () => {
    setShowDialog(false);
    setReminderAmount("");
    setReminderTime("");
    setTimePeriod("AM");
  };

  const addReminder = () => {
    if (!reminderAmount || !reminderTime) return;
    setReminders([
      ...reminders,
      `Drink ${reminderAmount}ml at ${reminderTime} ${timePeriod}`,
    ]);
    closeReminderDialog();
  };

  const clearReminders = () => {
    setReminders([]);
  };

  return (
    <div className="water-tracker">
      {/* Centered Title */}
      <div className="water-tracker-title">
        <h2 className="page-title">Water Tracker</h2>
      </div>

      {/* Daily Water Goal */}
      <div className="daily-goal card">
        <h3 className="goal-title">Daily Water Goal</h3>
        <div className="goal-container">
          <div className="goal-input-container">
            <span>Goal:</span>
            <input
              type="number"
              value={goal}
              onChange={(e) => setGoal(parseInt(e.target.value) || 0)}
              className="goal-input"
            />
            <span>ml</span>
          </div>
          <p className="progress-text">
            Progress: {Math.min(waterIntake, goal)} / {goal} ml
          </p>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${Math.min((waterIntake / goal) * 100, 100)}%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Quick Add Buttons */}
      <div className="quick-add card">
        <div className="button-group">
          <button className="add-button" onClick={() => addWater(250)}>
            Add 250ml
          </button>
          <button className="add-button" onClick={() => addWater(500)}>
            Add 500ml
          </button>
          <button className="add-button" onClick={() => addWater(1000)}>
            Add 1000ml
          </button>
          <button
            className="remove-button"
            onClick={() => removeWater(250)}
            disabled={waterIntake < 250}
          >
            Remove 250ml
          </button>
        </div>
      </div>

      {/* Hydration Reminder */}
      <div className="hydration-reminder card">
        <h3 className="reminder-title">Reminders</h3>
        <button className="add-reminder-button" onClick={openReminderDialog}>
          Add Reminder
        </button>
        <button className="clear-reminder-button" onClick={clearReminders}>
          Clear Reminders
        </button>
        <ul className="reminder-list">
          {reminders.map((reminder, index) => (
            <li key={index}>{reminder}</li>
          ))}
        </ul>
      </div>

      {/* Reminder Dialog */}
      {showDialog && (
        <div className="reminder-dialog">
          <div className="dialog-content">
            <h3>Set a Water Reminder</h3>

            <label>
              Water Amount (ml):
              <input
                type="number"
                value={reminderAmount}
                onChange={(e) => setReminderAmount(e.target.value)}
                placeholder="Enter amount in ml"
              />
            </label>

            <label>
              Time:
              <div className="time-selector">
                <input
                  type="time"
                  value={reminderTime}
                  onChange={(e) => setReminderTime(e.target.value)}
                />
                <select
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(e.target.value)}
                  className="time-period-selector"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </label>

            <div className="dialog-buttons">
              <button onClick={addReminder} className="confirm-button">
                Add
              </button>
              <button onClick={closeReminderDialog} className="cancel-button">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WaterTracker;
