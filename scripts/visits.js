// Get the current visit count from localStorage
let visitCount = localStorage.getItem('visitCount');

// Check if it's the user's first visit
if (!visitCount) {
    visitCount = 0;
}

// Increment the visit count
visitCount++;

// Save the updated visit count back to localStorage
localStorage.setItem('visitCount', visitCount);

// Send the visit count to the visitCount element
const visitCountElement = document.querySelector("#visitCount");
visitCountElement.innerHTML = `You have visited <b>${visitCount}</b> times`;