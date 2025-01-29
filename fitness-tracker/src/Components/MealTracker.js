import React, { useState } from 'react';

function MealTracker() {
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState('');
  const [details, setDetails] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fats, setFats] = useState('');

  const recommendedMeals = [
    { name: "Grilled Chicken Salad", details: "Chicken breast with fresh greens", calories: "300", protein: "25g", carbs: "15g", fats: "10g" },
    { name: "Smoothie Bowl", details: "Berries, banana, and granola", calories: "350", protein: "10g", carbs: "40g", fats: "8g" },
    { name: "Avocado Toast", details: "Whole grain toast with avocado", calories: "250", protein: "6g", carbs: "30g", fats: "12g" },
    { name: "Oatmeal", details: "Oats with honey and nuts", calories: "200", protein: "5g", carbs: "27g", fats: "3g" },
  ];

  const addMeal = () => {
    if (mealName && calories && protein && carbs && fats) {
      setMeals([
        ...meals,
        {
          id: meals.length + 1,
          name: mealName,
          details,
          calories,
          protein,
          carbs,
          fats,
        },
      ]);
      setMealName('');
      setDetails('');
      setCalories('');
      setProtein('');
      setCarbs('');
      setFats('');
    }
  };

  const addRecommendedMeal = (meal) => {
    setMeals([
      ...meals,
      { id: meals.length + 1, ...meal },
    ]);
  };

  const deleteMeal = (id) => {
    setMeals(meals.filter((meal) => meal.id !== id));
  };

  return (
    <div className="meal-tracker">
      <h2>Meal Tracker</h2>

      {/* Meal Entry Form */}
      <div className="meal-entry-form">
        <input
          type="text"
          placeholder="Meal Name"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Details (optional)"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <input
          type="number"
          placeholder="Calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <input
          type="number"
          placeholder="Protein (g)"
          value={protein}
          onChange={(e) => setProtein(e.target.value)}
        />
        <input
          type="number"
          placeholder="Carbs (g)"
          value={carbs}
          onChange={(e) => setCarbs(e.target.value)}
        />
        <input
          type="number"
          placeholder="Fats (g)"
          value={fats}
          onChange={(e) => setFats(e.target.value)}
        />
        <button onClick={addMeal}>Add Meal</button>
      </div>

      {/* Recommended Meals */}
      <div className="recommended-meals">
        <h3>Recommended Meals</h3>
        <div className="recommended-meals-list">
          {recommendedMeals.map((meal, index) => (
            <button
              key={index}
              className="recommended-meal-card"
              onClick={() => addRecommendedMeal(meal)}
              style={{
                padding: "15px 20px",
                margin: "15px",
                backgroundColor: "#2196F3",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "darkblue")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "blue")}
            >
              <h4 style={{ margin: "5px 0" }}>{meal.name}</h4>
              <p>{meal.details}</p>
              <p>Calories: {meal.calories}</p>
              <p>Protein: {meal.protein} | Carbs: {meal.carbs} | Fats: {meal.fats}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Daily Summary */}
      <div className="meal-summary">
        <h3>Daily Summary</h3>
        <p>
          Total Meals: {meals.length} | Total Calories:{' '}
          {meals.reduce((acc, meal) => acc + parseInt(meal.calories || 0), 0)}
        </p>
      </div>

      {/* Logged Meals */}
      <div className="meal-list">
        <h3>Your Meals</h3>
        {meals.length === 0 ? (
          <p>No meals logged yet. Add one to get started!</p>
        ) : (
          meals.map((meal) => (
            <div key={meal.id} className="meal-card">
              <h4>{meal.name}</h4>
              <p>{meal.details}</p>
              <p>Calories: {meal.calories}</p>
              <p>
                Protein: {meal.protein}g | Carbs: {meal.carbs}g | Fats: {meal.fats}g
              </p>
              <button onClick={() => deleteMeal(meal.id)} className="delete-button">
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MealTracker;
