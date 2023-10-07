// let weather = {
//   paris: {
//     city: "Paris",
//     temp: 19.7,
//     humidity: 80
//   },
//   tokyo: {
//     city: "Tokyo",
//     temp: 17.3,
//     humidity: 50
//   },
//   lisbon: {
//     city: "Lisbon",
//     temp: 30.2,
//     humidity: 20
//   },
//   sanFrancisco: {
//     city: "San Francisco",
//     temp: 20.9,
//     humidity: 100
//   },
//   oslo: {
//     city: "Oslo",
//     temp: -5,
//     humidity: 20
//   }
// };

// let city = prompt("Enter a city?");
// city = city.toLowerCase();
// if (weather[city] !== undefined) {
//   let temperature = weather[city].temp;
//   let humidity = weather[city].humidity;
//   let celsiusTemperature = Math.round(temperature);
//   let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

//   alert(
//     `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
//   );
// } else {
//   alert(
//     `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//   );
// }

// function search(event) {
//   event.preventDefault();
//   let searchInput = document.querySelector("#search-text-input");
//   let h3 = document.querySelector("#search-output");
//   h3.innerHTML = `Searching for ${searchInput.value}...`;
// }

let currentTime = new Date();

function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

let date = document.querySelector("#date");
date.innerHTML = formatDate(currentTime);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let city = response.data.name;
}

function searchCity(city) {
  let apiKey = "21b84527513a10dad86dd5a7f9c8af56";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  searchCity(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
searchCity("#search-text-input");
let temperature = data.main.temp;
let message = `It is ${temperature} degrees in ${city}`;
let h3 = document.querySelector("#search-output");
h3.innerHTML = message;
