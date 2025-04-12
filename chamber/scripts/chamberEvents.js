const eventsURL = "./data/events.json";

// Fetch and populate events
async function fetchAndDisplayEvents() {
    try {
        const response = await fetch(eventsURL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const events = await response.json();
        populateDiscoverPage(events);
        populateIndexPage(events);
    } catch (error) {
        console.error("Error fetching events:", error);
    }
}

// Populate events on the Discover page
function populateDiscoverPage(events) {
    const discoverEventsContainer = document.querySelector("#events");
    if (!discoverEventsContainer) return;

    discoverEventsContainer.innerHTML = "<h2>Upcoming Events</h2>"; // Clear and add heading

    events.forEach(event => {
        const eventElement = document.createElement("div");
        eventElement.classList.add("event");

        eventElement.innerHTML = `
            <img src="${event.image}" alt="${event.name}" class="eventImage">
            <div class="eventDetails">
                <h3>${event.name}</h3>
                <p>${event.date}</p>
                <p>${event.location}</p>
                <p>${event.description}</p>
            </div>
        `;

        discoverEventsContainer.appendChild(eventElement);
    });
}

// Populate events on the Index page
function populateIndexPage(events) {
    const indexEventsContainer = document.querySelector("#events-widget");
    if (!indexEventsContainer) return;

    indexEventsContainer.innerHTML = "<h2>Events</h2>"; // Clear and add heading

    events.slice(0, 4).forEach((event, index) => {
        const eventElement = document.createElement("div");
        eventElement.classList.add("displayEvent");
        eventElement.id = `event${index + 1}`;

        eventElement.innerHTML = `
            <h3>${event.name}</h3>
            <p>${event.date} - ${event.location}</p>
            <p>${event.description}</p>
        `;

        indexEventsContainer.appendChild(eventElement);
    });
}

// Call the function to fetch and display events
fetchAndDisplayEvents();