// script.js

// Variables to hold the interval ID, start time, and timer state
let intervalId; // To store the interval ID for stopping the timer
let startTime = 0; // To track the starting time of the timer
let isRunning = false; // To track whether the timer is currently running or not

// Function to format milliseconds into a readable time format (HH:MM:SS)
function formatTime(ms) {
  // Helper function to pad single-digit numbers with a leading zero
  const pad = (n) => (n < 10 ? "0" + n : n);

  // Calculating hours, minutes, and seconds based on milliseconds
  const seconds = Math.floor(ms / 1000) % 60;
  const minutes = Math.floor(ms / 60000) % 60;
  const hours = Math.floor(ms / 3600000);

  // Returning the formatted time string
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// Function to update the display with the current timer value
function updateDisplay() {
  const currentTime = Date.now() - startTime; // Calculate the time passed since the timer started
  const formattedTime = formatTime(currentTime); // Format the time
  document.getElementById("display").textContent = formattedTime; // Update the display element with the formatted time
}

// Function to start or resume the timer
function startTimer() {
  if (!isRunning) {
    // If the timer is not already running
    startTime = Date.now() - (startTime > 0 ? startTime : 0); // Set the start time if not set previously
    intervalId = setInterval(updateDisplay, 10); // Start updating the display at intervals of 10 milliseconds
    isRunning = true; // Set the timer state to running
    document.getElementById("startButton").textContent = "Resume"; // Update button text to 'Resume'
    document.getElementById("stopButton").disabled = false; // Enable the stop button
    document.getElementById("resetButton").disabled = false; // Enable the reset button
  }
}

// this is javascript code
// Function to stop the timer
function stopTimer() {
  if (isRunning) {
    // If the timer is currently running
    clearInterval(intervalId); // Stop the interval function execution
    isRunning = false; // Set the timer state to not running
    document.getElementById("startButton").textContent = "Resume"; // Update button text to 'Resume'
    document.getElementById("stopButton").disabled = true; // Disable the stop button
    document.getElementById("resetButton").disabled = false; // Enable the reset button
  }
}

// Function to reset the timer
function resetTimer() {
  clearInterval(intervalId); // Stop the interval function execution
  startTime = 0; // Reset the start time to zero
  isRunning = false; // Set the timer state to not running
  document.getElementById("display").textContent = "00:00:00"; // Reset the display to show '00:00:00'
  document.getElementById("startButton").textContent = "Start"; // Update button text to 'Start'
  document.getElementById("stopButton").disabled = true; // Disable the stop button
  document.getElementById("resetButton").disabled = true; // Disable the reset button
}

// Event listeners for buttons to trigger timer functionalities
document.getElementById("startButton").addEventListener("click", startTimer); // Listen for click on the Start/Resume button
document.getElementById("stopButton").addEventListener("click", stopTimer); // Listen for click on the Stop button
document.getElementById("resetButton").addEventListener("click", resetTimer); // Listen for click on the Reset button
