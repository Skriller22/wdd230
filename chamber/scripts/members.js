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

function displayMembers(members) {
    members.forEach(member => {
        const memberCard = document.createElement("li");
        memberCard.classList.add("member-card"); // Add a class for styling

        // Member Name
        const memberName = document.createElement("h2");
        memberName.textContent = member.name;
        memberCard.appendChild(memberName);

        // Member Image
        const memberImage = document.createElement("img");
        memberImage.src = baseURL + member.icon; // Use the 'icon' field for the image
        memberImage.alt = `${member.name}'s logo`;
        memberCard.appendChild(memberImage);

        // Member Address
        const memberAddress = document.createElement("p");
        memberAddress.textContent = `Address: ${member.address}`;
        memberCard.appendChild(memberAddress);

        // Member Phone
        const memberPhone = document.createElement("p");
        memberPhone.textContent = `Phone: ${member.phone}`;
        memberCard.appendChild(memberPhone);

        // Member Website
        const memberWebsite = document.createElement("a");
        memberWebsite.href = member.website;
        memberWebsite.textContent = "Visit Website";
        memberWebsite.target = "_blank"; // Open the link in a new tab
        memberWebsite.classList.add("website-link"); // Optional: Add a class for styling
        memberCard.appendChild(memberWebsite);

        membersList.appendChild(memberCard); // Append the card to the list
    });
}

getMembers(); // Call the function to fetch and display members

const gridButton = document.querySelector("#grid-view");
const listButton = document.querySelector("#list-view");
membersList.classList.add("members-list", "grid-view"); // Default to grid view

gridButton.addEventListener("click", () => {
    membersList.classList.remove("list-view");
    membersList.classList.add("grid-view");
});

listButton.addEventListener("click", () => {
    membersList.classList.remove("grid-view");
    membersList.classList.add("list-view");
});