const baseURL = "https://skriller22.github.io/wdd230/chamber/";
const membersURL = "https://skriller22.github.io/wdd230/chamber/data/members.json";

const membersContainer = document.querySelector("#members");
const membersList = document.createElement("ul"); // Create a list to hold the member cards
membersList.classList.add("members-list"); // Add a class for styling
membersContainer.appendChild(membersList); // Append the list to the container

async function getMembers() {
    try {
        const response = await fetch(membersURL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}