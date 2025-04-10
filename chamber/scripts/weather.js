const currentTemp = document.querySelector("#current-temp");
const currentHumidity = document.querySelector("#current-humidity");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weather-caption");

const forecastDays = [
    { date: document.querySelector("#day1 .forecast-date"), icon: document.querySelector("#day1 .forecast-icon"), temp: document.querySelector("#day1 .forecast-temp") },
    { date: document.querySelector("#day2 .forecast-date"), icon: document.querySelector("#day2 .forecast-icon"), temp: document.querySelector("#day2 .forecast-temp") },
    { date: document.querySelector("#day3 .forecast-date"), icon: document.querySelector("#day3 .forecast-icon"), temp: document.querySelector("#day3 .forecast-temp") },
];

const cityId = "5359777"; // Irvine, California
const apiKey = "e55c74d00fb4b91b12012e6d5894575a";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=metric`;

async function apiFetch() {
    try {
        const weatherResponse = await fetch(weatherUrl);
        const forecastResponse = await fetch(forecastUrl);

        if (!weatherResponse.ok || !forecastResponse.ok) {
            throw new Error(`HTTP error! status: ${weatherResponse.status}, ${forecastResponse.status}`);
        }

        const weatherData = await weatherResponse.json();
        const forecastData = await forecastResponse.json();

        displayWeatherData(weatherData);
        displayForecastData(forecastData);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function displayWeatherData(data) {
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const icon = data.weather[0].icon;
    const description = data.weather[0].description;

    currentTemp.textContent = `${temp}°C`;
    currentHumidity.textContent = `${humidity}%`;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${icon}@2x.png`);
    weatherIcon.setAttribute("alt", description);
    captionDesc.textContent = description.charAt(0).toUpperCase() + description.slice(1);
}

function displayForecastData(data) {
    // Filter forecast data to get one entry per day (e.g., at 12:00 PM)
    const dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    dailyForecasts.forEach((forecast, index) => {
        const date = new Date(forecast.dt_txt);
        const temp = forecast.main.temp;
        const icon = forecast.weather[0].icon;
        const description = forecast.weather[0].description;

        forecastDays[index].date.textContent = date.toLocaleDateString(undefined, { weekday: "long" });
        forecastDays[index].icon.setAttribute("src", `https://openweathermap.org/img/wn/${icon}@2x.png`);
        forecastDays[index].icon.setAttribute("alt", description);
        forecastDays[index].temp.textContent = `${temp}°C`;
    });
}

apiFetch();