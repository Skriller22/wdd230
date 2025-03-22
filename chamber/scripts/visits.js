// Get the current visit count and last visit timestamp from localStorage
let visitCount = localStorage.getItem('visitCount');
let lastVisit = localStorage.getItem('lastVisit');

// Get the visitCount element
const visitCountElement = document.querySelector("#visitCount");

// Get the current timestamp
const currentTime = Date.now();

// Check if it's the user's first visit
if (!visitCount || !lastVisit) {
    visitCount = 0;
    visitCountElement.innerHTML = "Welcome! Let us know if you have any questions.";
} else {
    // Calculate the time difference in days
    const timeDifference = Math.floor((currentTime - lastVisit) / (1000 * 60 * 60 * 24));

    // Display a message based on the time difference
    if (timeDifference === 0) {
        visitCountElement.innerHTML = `Back so soon! Awesome!`; // Same day visit
    } else {
        visitCountElement.innerHTML = `You last visited ${timeDifference} day ago`; // More than one day visit
    }
}

// Save the updated visit count and current timestamp back to localStorage
localStorage.setItem('visitCount', visitCount);
localStorage.setItem('lastVisit', currentTime);