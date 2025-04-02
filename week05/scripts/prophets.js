const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // console.table(data); // Uncomment for debugging
        displayProphets(data.prophets);
    } catch (error) {
        console.error('Error fetching prophet data:', error);
    }
}

const displayProphets = (prophets) => {
    // card build code goes here
    prophets.forEach(prophet => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');
        const birthDate = document.createElement('p');
        const birthPlace = document.createElement('p');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Born: ${prophet.birthdate}`;
        birthPlace.textContent = `Birthplace: ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
        card.setAttribute('class', 'prophet-card');

        cards.appendChild(card);
    });
}

getProphetData();