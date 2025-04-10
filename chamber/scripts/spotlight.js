fetch("../chamber/data/members.json")
    .then(response => response.json())
    .then(data => {
        const spotlightContainer = document.querySelector("#spotlight-container");

        // Filter members with Gold or Silver membership
        const spotlightMembers = data.filter(member =>
            member.membership_level === "Gold" || member.membership_level === "Silver"
        );

        // Shuffle the array and select the first two members
        const shuffledMembers = spotlightMembers.sort(() => 0.5 - Math.random());
        const selectedMembers = shuffledMembers.slice(0, 2);

        // Generate HTML for each selected spotlight member
        selectedMembers.forEach(member => {
            const memberCard = document.createElement("div");
            memberCard.classList.add("spotlight-member");

            memberCard.innerHTML = `
                <img src="../chamber/images/${member.icon}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;

            spotlightContainer.appendChild(memberCard);
        });
    })
    .catch(error => console.error("Error loading members data:", error));