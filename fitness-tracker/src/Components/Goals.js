import React, { useState } from 'react';

function Goals() {
  const [goals, setGoals] = useState([]);
  const [recommendedGoals] = useState([
    { id: 1, text: 'Walk 10,000 steps daily' },
    { id: 2, text: 'Drink 3 liters of water daily' },
    { id: 3, text: 'Burn 500 calories per workout' },
    { id: 4, text: 'Sleep 7 hours every night' },
  ]);

  const handleSelectRecommendedGoal = (goal) => {
    setGoals([
      ...goals,
      {
        id: goals.length + 1,
        text: goal.text,
        progress: 0,
        target: 100,
        completed: false,
      },
    ]);
  };

  const updateProgress = (id, increment) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id
          ? {
              ...goal,
              progress: Math.min(goal.target, goal.progress + increment),
              completed: goal.progress + increment >= goal.target,
            }
          : goal
      )
    );
  };

  const deleteGoal = (id) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <div className="goals">
      <h2 className="section-title">Set Your Goals</h2>

      {/* Recommended goals */}
      <div className="recommended-goals">
        <h3 className="sub-title">Recommended Goals</h3>
        <ul>
          {recommendedGoals.map((goal) => (
            <li key={goal.id}>
              <button onClick={() => handleSelectRecommendedGoal(goal)}>
                {goal.text}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Display goals */}
      <div className="goal-list">
        <h3 className="sub-title">Your Goals</h3>
        {goals.length === 0 && (
          <p>No goals set yet. Select one from the recommended list!</p>
        )}
        {goals.map((goal) => (
          <div key={goal.id} className="goal-card">
            <h4>{goal.text}</h4>
            <p>
              Progress: {goal.progress}/{goal.target}{' '}
              {goal.completed && <span className="badge">Completed!</span>}
            </p>
            <div className="goal-actions">
              <button onClick={() => updateProgress(goal.id, 10)}>+10</button>
              <button onClick={() => updateProgress(goal.id, -10)}>-10</button>
              <button onClick={() => deleteGoal(goal.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Motivation and Tips */}
      <div className="goal-tips">
        <h3 className="sub-title">Motivational Tips</h3>
        <p>
          "Setting goals is the first step in turning the invisible into the
          visible."
        </p>
        <p>Start small and stay consistent to build healthy habits!</p>
      </div>
    </div>
  );
}

export default Goals;
