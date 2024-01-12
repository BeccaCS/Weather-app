function updatedWeather(response) {
  let temperature = document.querySelector("#display-degrees");
  let cityElement = document.querySelector("#city");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#speed");
  let time = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let icon = document.querySelector("#icon");

  icon.innerHTML = `<img src="${response.data.condition.icon_url}" alt="weather icon" class="weather-icon"></img>`;

  time.innerHTML = formatDate(date);
  wind.innerHTML = `${response.data.wind.speed}km/h`;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  description.innerHTML = response.data.condition.description;
  temperature.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

function search(city) {
  let apiKey = "6cb9ba6b06o8d48e9btcf36869da4a46";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(updatedWeather);
}

function formSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  search(searchInput.value);
}

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");
  let days = ["Fri", "Sat", "Sun", "Mon", "Tue"];
  let forecastHtml = "";

  days.foreach(function (day) {
    forecastHtml =
      forecastHtml +
      `
  <div class="weather-forecast-day">
    <div class="weather-forecast-date">${day}</div>

    <img
      src="data:image/png;base64,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"
      alt="☁️"
    />
    <div class="weather-forecast-temperature">
      {" "}
      <span class="weather-forecast-temperature-max">18&deg</span>{" "}
      <span class="weather-forecast-temperature-min">12&deg</span>{" "}
    </div>
  </div>
`;
  });
}

let searchform = document.querySelector("#search-form-input");
searchform.addEventListener("submit", formSearch);

search("Madrid");
displayForecast();
