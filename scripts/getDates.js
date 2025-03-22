// get the current year
const yearElement = document.querySelector("#year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// get the last modified date
const lastModifiedElement = document.querySelector("#lastModified");
const lastModifiedDate = new Date(document.lastModified);

// Format date and time
const options = {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'};
const shortOptions = {year: 'numeric', month: '2-digit', day: '2-digit'}; // for current date display
const formattedDateTime = lastModifiedDate.toLocaleDateString(undefined, options);

lastModifiedElement.textContent = formattedDateTime;

// provide the current date and time for information card
const currentDateElement = document.querySelector("#today-date");
const currentDate = new Date();
const formattedCurrentDate = currentDate.toLocaleDateString(undefined, shortOptions);
currentDateElement.textContent = formattedCurrentDate;