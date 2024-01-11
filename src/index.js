function fromatDate(date) {
  let day = day.getDay();
  let minutes = day.getMinutes();
  let hours = day.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return date;
}

function updatedWeather(response) {
  let temperature = document.querySelector("#display-degrees");
  let cityElement = document.querySelector("#city");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#speed");
  let time = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  //console.log(response.data);

  time.innerHTML = `${date.getDay()},${date.getHours()}:${date.getMinutes()}`;
  wind.innerHTML = `${response.data.wind.speed}km/h`;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  description.innerHTML = response.data.condition.description;
  temperature.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
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

let searchform = document.querySelector("#search-form-input");
searchform.addEventListener("submit", formSearch);

search("Madrid");
