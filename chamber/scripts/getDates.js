// get the current year
const yearElement = document.querySelector("#year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// get the last modified date
const lastModifiedElement = document.querySelector("#lastModified");
const lastModifiedDate = new Date(document.lastModified);

// Format date and time
const options = {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'};
const formattedDateTime = lastModifiedDate.toLocaleDateString(undefined, options);

lastModifiedElement.textContent = formattedDateTime;

// Get current date for the form
// Check if the timestamp input field exists before setting its value
const timestampInput = document.getElementById('timestamp');
if (timestampInput) {
    timestampInput.value = new Date().toISOString().slice(0, 16);
}