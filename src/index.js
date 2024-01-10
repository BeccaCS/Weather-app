let apiKey = "6cb9ba6b06o8d48e9btcf36869da4a46";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query={query}&key={key}";

function formSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = document.querySelector("#city");
  city.innerHTML = searchInput.value;
}

let searchform = document.querySelector("#search-form-input");
searchform.addEventListener("submit", formSearch);
