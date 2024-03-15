// Function to display a welcome message with the current date
const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

// Function to display a workout routine
const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

// Event listener for the submit workout button
document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// Function to add new fitness goals and prevent duplicates
const addNewGoal = () => {
    // Get the input value and trim leading/trailing spaces
    const goalInput = document.querySelector('#goalInput').value.trim();
    const goalList = document.querySelector('#goalList');

    // Check for duplicates
    const existingGoals = goalList.querySelectorAll('li');
    let isDuplicate = false;
    existingGoals.forEach(goal => {
        if (goal.textContent.trim().toLowerCase() === goalInput.toLowerCase()) {
            isDuplicate = true;
            return;
        }
    });

    // If a duplicate is found, display an alert and return early
    if (isDuplicate) {
        alert('This goal is already added!');
        return;
    }

    // Proceed with adding it as a new goal if no duplicate is found
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

// Function to update water intake
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

// Event listeners for increasing and decreasing water intake
document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

// Function to update progress charts
const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

// Function to toggle theme
const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

// Event listener for theme toggle button
document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

// Function to submit meal plan
const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

// Event listener for meal plan form submission
document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
