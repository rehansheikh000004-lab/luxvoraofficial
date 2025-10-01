const apiKey = "138c9a46136b8599b9865364880d3a0d"; // 🔑 Replace with your OpenWeather API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      alert("City not found! Try again.");
      return;
    }

    document.getElementById("cityName").textContent = data.name + ", " + data.sys.country;
    document.getElementById("temperature").textContent = `🌡️ ${data.main.temp}°C`;
    document.getElementById("condition").textContent = `☁️ ${data.weather[0].description}`;
    document.getElementById("humidity").textContent = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").textContent = `🌬️ Wind: ${data.wind.speed} m/s`;
    document.getElementById("weatherIcon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    document.getElementById("weatherResult").classList.remove("hidden");

  } catch (error) {
    alert("Error fetching weather data!");
    console.error(error);
  }
}
