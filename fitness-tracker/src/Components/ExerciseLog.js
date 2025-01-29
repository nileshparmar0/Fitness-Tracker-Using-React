import React, { useState } from 'react';
import { FaRunning, FaBiking, FaSwimmer } from 'react-icons/fa';
import { MdFitnessCenter } from 'react-icons/md';
import { GiMuscleUp } from 'react-icons/gi';

// Exercise options with icons
const exerciseOptions = [
  { id: 'squat', name: 'Squat', category: 'Legs', Icon: MdFitnessCenter, caloriesPerMin: 8 },
  { id: 'deadlift', name: 'Deadlift', category: 'Back', Icon: MdFitnessCenter, caloriesPerMin: 10 },
  { id: 'benchPress', name: 'Bench Press', category: 'Chest', Icon: MdFitnessCenter, caloriesPerMin: 7 },
  { id: 'pullUp', name: 'Pull Up', category: 'Back', Icon: GiMuscleUp, caloriesPerMin: 6 },
  { id: 'running', name: 'Running', category: 'Cardio', Icon: FaRunning, caloriesPerMin: 12 },
  { id: 'cycling', name: 'Cycling', category: 'Cardio', Icon: FaBiking, caloriesPerMin: 10 },
  { id: 'swimming', name: 'Swimming', category: 'Cardio', Icon: FaSwimmer, caloriesPerMin: 11 }
];

function ExerciseLog() {
  const [exercises, setExercises] = useState([]);
  const [newExercise, setNewExercise] = useState({ id: '', sets: '', reps: '', weight: '' });

  const addExercise = () => {
    if (newExercise.id && newExercise.sets && newExercise.reps && newExercise.weight) {
      const selectedExercise = exerciseOptions.find(e => e.id === newExercise.id);
      setExercises([...exercises, { ...newExercise, name: selectedExercise.name, Icon: selectedExercise.Icon }]);
      setNewExercise({ id: '', sets: '', reps: '', weight: '' });
    }
  };

  const removeLastExercise = () => {
    if (exercises.length > 0) {
      setExercises(exercises.slice(0, -1)); // Remove last exercise
    }
  };

  return (
    <div className="exercise-log">
      <h2>Exercise Log</h2>

      {/* Weekly Goal Progress */}
      <div className="weekly-goal">
        <p>Weekly Goal: {exercises.length} / 5 Workouts</p>
        <progress value={exercises.length} max="5"></progress>
      </div>

      {/* Form for Adding Exercise */}
      <div className="form">
        <select
          name="id"
          value={newExercise.id}
          onChange={(e) => setNewExercise({ ...newExercise, id: e.target.value })}
          className="select-exercise"
        >
          <option value="">Select Exercise</option>
          {exerciseOptions.map(option => (
            <option key={option.id} value={option.id}>{option.name}</option>
          ))}
        </select>
        <input
          type="number"
          name="sets"
          placeholder="Sets"
          value={newExercise.sets}
          onChange={(e) => setNewExercise({ ...newExercise, sets: e.target.value })}
          className="input-small"
        />
        <input
          type="number"
          name="reps"
          placeholder="Reps"
          value={newExercise.reps}
          onChange={(e) => setNewExercise({ ...newExercise, reps: e.target.value })}
          className="input-small"
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={newExercise.weight}
          onChange={(e) => setNewExercise({ ...newExercise, weight: e.target.value })}
          className="input-small"
        />
        <button onClick={addExercise} className="add-button">Add Exercise</button>
      </div>

      {/* Your Exercises Section */}
      <h3 className="your-exercises-title">Your Exercises</h3>
      {exercises.length === 0 ? (
        <p className="no-exercises">No Exercises were added</p>
      ) : (
        <div className="exercise-list">
          {exercises.map((exercise, index) => (
            <div key={index} className="exercise-entry">
              <exercise.Icon className="exercise-icon" />
              <div className="exercise-details">
                <p className="exercise-name">{exercise.name}</p>
                <p>{exercise.sets} sets x {exercise.reps} reps at {exercise.weight} kg</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Remove Exercise Button */}
      {exercises.length > 0 && (
        <button onClick={removeLastExercise} className="remove-exercise-button">
          Remove Last Exercise
        </button>
      )}
    </div>
  );
}

export default ExerciseLog;
