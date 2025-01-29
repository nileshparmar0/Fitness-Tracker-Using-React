// OverallProgress.js
import React from 'react';

function OverallProgress({ stats }) {
  return (
    <div className="overall-progress">
      <h2>Overall Progress</h2>
      <div className="stats">
        <p>Total Steps: {stats.totalSteps}</p>
        <p>Total Calories Burned: {stats.caloriesBurned}</p>
        <p>Average Heart Rate: {stats.averageHeartRate}</p>
      </div>
    </div>
  );
}

export default OverallProgress;
