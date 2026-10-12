
const searchForm = document.getElementById("searchForm");
const cityInput = document.getElementById("cityInput");
const message = document.getElementById("message");
const weatherCard = document.getElementById("weatherCard");
const searchButton = searchForm.querySelector("button");

// Weather code descriptions
function getWeatherCondition(code) {
    if (code === 0) {
        return { text: "Clear Sky", icon: "☀️" };
    }

    if (code <= 2) {
        return { text: "Partly Cloudy", icon: "🌤️" };
    }

    if (code === 3) {
        return { text: "Overcast", icon: "☁️" };
    }

    if (code === 45 || code === 48) {
        return { text: "Foggy", icon: "🌫️" };
    }

    if (code >= 51 && code <= 57) {
        return { text: "Drizzle", icon: "🌦️" };
    }

    if (code >= 61 && code <= 67) {
        return { text: "Rainy", icon: "🌧️" };
    }

    if (code >= 71 && code <= 77) {
        return { text: "Snowy", icon: "❄️" };
    }

    if (code >= 80 && code <= 82) {
        return { text: "Rain Showers", icon: "🌦️" };
    }

    if (code >= 85 && code <= 86) {
        return { text: "Snow Showers", icon: "🌨️" };
    }

    if (code >= 95 && code <= 99) {
        return { text: "Thunderstorm", icon: "⛈️" };
    }

    return { text: "Unknown", icon: "🌍" };
}

// Search for a city
async function getCoordinates(city) {
    const url =
        "https://geocoding-api.open-meteo.com/v1/search" +
        "?name=" + encodeURIComponent(city) +
        "&count=1&language=en&format=json";

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Could not search for the city.");
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
        throw new Error("City not found. Try another name.");
    }

    return data.results[0];
}

// Get current weather
async function getWeather(latitude, longitude) {
    const url =
        "https://api.open-meteo.com/v1/forecast" +
        `?latitude=${latitude}` +
        `&longitude=${longitude}` +
        "&current=temperature_2m," +
        "relative_humidity_2m," +
        "apparent_temperature," +
        "weather_code," +
        "wind_speed_10m" +
        "&timezone=auto";

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Unable to fetch weather data.");
    }

    const data = await response.json();

    if (!data.current) {
        throw new Error("Weather information unavailable.");
    }

    return data.current;
}

// Display weather information
function displayWeather(location, weather) {
    const condition = getWeatherCondition(
        weather.weather_code
    );

    const locationName = [
        location.name,
        location.country
    ].filter(Boolean).join(", ");

    document.getElementById("cityName").textContent =
        locationName;

    document.getElementById("date").textContent =
        "Updated: " + weather.time.replace("T", " ");

    document.getElementById("weatherIcon").textContent =
        condition.icon;

    document.getElementById("temperature").textContent =
        Math.round(weather.temperature_2m) + "°C";

    document.getElementById("description").textContent =
        condition.text;

    document.getElementById("humidity").textContent =
        weather.relative_humidity_2m + "%";

    document.getElementById("windSpeed").textContent =
        Math.round(weather.wind_speed_10m) + " km/h";

    document.getElementById("feelsLike").textContent =
        Math.round(weather.apparent_temperature) + "°C";

    weatherCard.hidden = false;
}

// Main function
async function searchWeather(city) {
    try {
        message.textContent = "Loading weather...";
        searchButton.disabled = true;
        weatherCard.hidden = true;

        const location = await getCoordinates(city);

        const weather = await getWeather(
            location.latitude,
            location.longitude
        );

        displayWeather(location, weather);
        message.textContent = "";

    } catch (error) {
        message.textContent = error.message;

    } finally {
        searchButton.disabled = false;
    }
}

// Form submission
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (!city) {
        message.textContent = "Please enter a city name.";
        return;
    }

    searchWeather(city);
});

// Show Lagos weather on page load
cityInput.value = "Lagos";
searchWeather("Lagos");
