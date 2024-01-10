function updatedWeather(response) {
  let temperature = document.querySelector("#display-degrees");
  let cityElement = document.querySelector("#city");
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

/*
function currentDate(date) {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
}
*/
