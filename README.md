# Fitness Tracker

A comprehensive React-based fitness tracking application that helps users monitor their daily health and wellness activities, set goals, and track progress over time.

## 🏋️ Features

### Core Functionality
- **Exercise Logging** - Track various workouts including strength training (squats, deadlifts, bench press) and cardio activities (running, cycling, swimming)
- **Meal Tracking** - Log daily meals with calorie counting and nutritional information
- **Water Intake Monitoring** - Track daily hydration with customizable goals
- **Goal Setting** - Set and monitor fitness goals with progress tracking
- **Daily Summary** - Comprehensive overview of daily activities and achievements

### Dashboard & Analytics
- **Interactive Dashboard** - Real-time overview of fitness metrics and progress
- **Interactive Charts** - Visual representation of workout data, calories burned, and progress trends
- **Progress Tracking** - Long-term monitoring of fitness improvements
- **Activity Data Visualization** - Weekly breakdown of workouts, calories, and steps

### Smart Features
- **Reminders System** - Customizable notifications for workouts, meals, and hydration
- **Dark Mode Support** - Toggle between light and dark themes with persistent storage
- **Responsive Design** - Optimized for desktop and mobile devices
- **Data Persistence** - Local storage integration for user data

## 🚀 Tech Stack

- **Frontend**: React 18.2.0
- **Routing**: React Router DOM 6.22.0
- **State Management**: Zustand 5.0.3
- **Charts & Visualization**: 
  - Recharts 2.10.3
  - Chart.js 4.4.1
- **Icons**: React Icons 4.12.0
- **Styling**: Custom CSS with responsive design
- **Build Tool**: Create React App 5.0.1

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fitness-tracker.git
   cd fitness-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4000` to view the application

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode on port 4000
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎯 Usage

### Getting Started
1. **Dashboard**: View your daily fitness overview and quick stats
2. **Exercise Log**: Add workouts by selecting exercise type, sets, reps, and duration
3. **Meal Tracker**: Log meals with calorie information
4. **Water Tracker**: Monitor hydration levels and set daily goals
5. **Goals**: Set fitness objectives and track progress
6. **Reminders**: Configure notifications for various activities

### Key Components

#### Exercise Tracking
- Log various exercise types with automatic calorie calculation
- Track sets, reps, duration, and exercise categories
- Visual progress indicators and weekly goal monitoring

#### Water & Nutrition
- Customizable daily water intake goals
- Meal logging with nutritional tracking
- Progress visualization and achievement tracking

#### Goal Management
- Predefined recommended goals (10,000 steps, 3L water, etc.)
- Custom goal creation with progress tracking
- Achievement badges and completion status

## 🏗️ Project Structure

```
fitness-tracker/
├── public/
├── src/
│   ├── Components/
│   │   ├── Dashboard.js
│   │   ├── ExerciseLog.js
│   │   ├── MealTracker.js
│   │   ├── WaterTracker.js
│   │   ├── Goals.js
│   │   ├── Reminders.js
│   │   ├── DailySummary.js
│   │   ├── InteractiveCharts.js
│   │   └── ...
│   ├── store/
│   │   └── fitnessStore.js
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

## 📊 State Management

The application uses Zustand for efficient state management with the following key features:

- **Exercise Data**: Stores workout history with computed activity metrics
- **Water Tracking**: Monitors daily hydration levels
- **Goal System**: Manages user-defined fitness objectives
- **Persistent Storage**: Local storage integration for data persistence

## 🎨 Styling & Theme

- **Responsive Design**: Optimized for various screen sizes
- **Dark Mode**: Toggle-able theme with system preference detection
- **Modern UI**: Clean, intuitive interface with smooth transitions
- **Color Scheme**: Purple primary theme with accessible color contrasts

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔮 Future Enhancements

- **Wearable Integration**: Connect with fitness trackers and smartwatches
- **Social Features**: Share progress with friends and family
- **Advanced Analytics**: Detailed performance insights and trends
- **Meal Planning**: Integrated meal planning and recipe suggestions
- **Workout Plans**: Structured fitness programs and routines
- **Export Features**: Data export for external analysis

## 📞 Support

If you encounter any issues or have questions, please [open an issue](https://github.com/yourusername/fitness-tracker/issues) on GitHub.

## 🙏 Acknowledgments

- React team for the excellent framework
- Chart.js and Recharts for beautiful data visualization
- React Icons for comprehensive icon library
- Zustand for lightweight state management

---

**Start your fitness journey today!** 💪
