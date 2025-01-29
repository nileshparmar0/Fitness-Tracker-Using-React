import React, { useState } from 'react';

function Reminders() {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState('');
  const [time, setTime] = useState('');
  const [frequency, setFrequency] = useState('');
  const [categories] = useState([
    'Daily Health Goals',
    'Workouts',
    'Nutrition',
    'Sleep Schedule',
    'Hydration Goals'
  ]);

  const addReminder = () => {
    if (newReminder.trim() && time.trim() && frequency.trim()) {
      setReminders([
        ...reminders,
        { id: reminders.length + 1, title: newReminder, time, frequency },
      ]);
      setNewReminder('');
      setTime('');
      setFrequency('');
    }
  };

  const deleteReminder = (id) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  return (
    <div className="reminders">
      <h2>Reminders</h2>

      {/* Reminder Input */}
      <div className="reminder-input">
        <input
          type="text"
          placeholder="Reminder Title"
          value={newReminder}
          onChange={(e) => setNewReminder(e.target.value)}
        />
        <input
          type="time"
          placeholder="Set Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <option value="" disabled>Select Frequency</option>
          <option value="One-Time">One-Time</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
        </select>
        <button onClick={addReminder}>Add Reminder</button>
      </div>

      {/* Predefined Categories */}
      <div className="reminder-categories">
        <h3>Categories</h3>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <button>{category}</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Display Reminders */}
      <div className="reminder-list">
        <h3>Your Reminders</h3>
        {reminders.length === 0 ? (
          <p>No reminders set yet. Add one to get started!</p>
        ) : (
          reminders.map((reminder) => (
            <div key={reminder.id} className="reminder-card">
              <h4>{reminder.title}</h4>
              <p>Time: {reminder.time}</p>
              <p>Frequency: {reminder.frequency}</p>
              <button
                onClick={() => deleteReminder(reminder.id)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Reminders;
