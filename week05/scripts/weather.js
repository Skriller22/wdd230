const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const cityId = "2821164"; 
// Trier, Germany: 2821164
const apiKey = "e55c74d00fb4b91b12012e6d5894575a"; // 
const url = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function displayWeatherData(data) {
    const temp = data.list[0].main.temp;
    const icon = data.list[0].weather[0].icon;
    const description = data.list[0].weather[0].description;

    currentTemp.textContent = `${temp}°F`;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${icon}@2x.png`);
    weatherIcon.setAttribute("alt", description);
    captionDesc.textContent = description;
}

apiFetch();