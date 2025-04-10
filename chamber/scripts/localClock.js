// Update the current time in the weather widget
const weatherTimeElement = document.querySelector("#weather-time");

function updateCurrentTime() {
    const now = new Date();
    const timeOptions = { hour: "2-digit", minute: "2-digit" }; // Exclude seconds
    weatherTimeElement.textContent = `${now.toLocaleTimeString(undefined, timeOptions)}`;
}

// Update the time every minute
setInterval(updateCurrentTime, 60000);

// Initialize the time immediately
updateCurrentTime();