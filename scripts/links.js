const baseURL = "https://skriller22.github.io/wdd230/";
const linksURL = "https://skriller22.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayLinks(data);
    } catch (error) {
        console.error('Error fetching links data:', error);
    }
}

getLinks();

function displayLinks(data) {
    if (!Array.isArray(data.weeks)) {
        console.error("Invalid data format: 'weeks' should be an array.");
        document.querySelector(".links-container").innerHTML = "<p>Invalid data format.</p>";
        return;
    }

    const linksContainer = document.querySelector(".links-container");
    linksContainer.innerHTML = ""; // Clear existing content

    const list = document.createElement("ul"); // Create a list to mimic the assignments card

    data.weeks.forEach(week => {
        if (!week.week || !Array.isArray(week.links)) {
            console.error("Invalid week data format:", week);
            return;
        }

        const listItem = document.createElement("li"); // Create a list item for each week
        listItem.innerHTML = `Week ${week.week}: `;

        const linksHTML = week.links.map(link => {
            if (!link.url || !link.title) {
                console.error("Invalid link data format:", link);
                return "";
            }
            const fullURL = link.url.startsWith("http") ? link.url : `${baseURL}${link.url}`;
            return `<a href="${fullURL}">${link.title}</a>`;
        }).join(" | "); // Separate links with a pipe (|) like in the assignments card

        listItem.innerHTML += linksHTML; // Append the links to the list item
        list.appendChild(listItem); // Add the list item to the list
    });

    linksContainer.appendChild(list); // Add the list to the container
}
