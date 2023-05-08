// let weather = {
//  paris: {
//   temp: 19.7,
//   humidity: 80,
//  },
//  tokyo: {
//   temp: 17.3,
//   humidity: 50,
//  },
//  lisbon: {
//   temp: 30.2,
//   humidity: 20,
//  },
//  "san francisco": {
//   temp: 20.9,
//   humidity: 100,
//  },
//  oslo: {
//   temp: -5,
//   humidity: 20,
//  },
// };

// // false, undefined, null, 0, '', NaN
// // weather['oslo'];

// function showWeather () {
//     let city = prompt("Enter your city.");
//     city = city.toLowerCase();
//     if(weather[city]){
//         let tempC = Math.round(weather[city].temp);
//         let tempF = Math.round(tempC*9/5+32);
//         alert(
//          `In ${city} temperature is ${tempC} (${tempF}F) and humidity is ${weather[city].humidity}%`
//         );
//     } else {
//         alert(`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}.
//     `)}
// }
// showWeather();

let currentDate = document.querySelector("#currentData");
let now = new Date();

function formatDate(now) {
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
  ];
  let day = days[now.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function showWeather(response) {
  console.log(response.data.weather[0].icon);
 let temperature = Math.round(response.data.main.temp);
 let city = response.data.name;
 let cloud = response.data.weather[0].main;
 let h4 = document.querySelector("#currentCity");
 let icon = response.data.weather[0].icon;
 h4.innerHTML = `${city}`;
 let cloudy = document.querySelector("#cloud");
 cloudy.innerHTML = `${cloud}`;
 let temp = document.querySelector("#temperature");
 temp.innerHTML = `${temperature}`;
 let iconElement = document.querySelector("#icon");
 iconElement.setAttribute(
  "src",
  `https://openweathermap.org/img/wn/${icon}@2x.png`
 );
}

currentDate.innerHTML = formatDate(now);

let apiKey = "5af46b7c735c00e84f63fde5be627fa5";
let searchInput = document.querySelector("#search-text-input");

let form = document.querySelector("#search-form");
function searchWeather(event) {
 event.preventDefault();
 let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
 axios.get(apiURL).then(showWeather);
}
form.addEventListener("submit", searchWeather);

function currentCity(position) {
 let latitude = position.coords.latitude;
 let longitude = position.coords.longitude;
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(showWeather);
}

function getCurrentPosition() {
 navigator.geolocation.getCurrentPosition(currentCity);
}
let button = document.querySelector("#current-city");
button.addEventListener("click", getCurrentPosition);

// function search(event) {
//  event.preventDefault();
//  let searchInput = document.querySelector("#search-text-input");
// //searchInput = searchInput.trim();
//  let h4 = document.querySelector("h4");
//  if (searchInput.value) {
//   h4.innerHTML = `Weather in ${searchInput.value}`;
//  } else {
//   h4.innerHTML = `please type a city`;
//  }
// }
// let form = document.querySelector("form");
// form.addEventListener("submit", search);

// function temperatureC(event) {
//  event.preventDefault();
//  let tempC = 2;
//  let link = document.querySelector("#temperature");
//  link.innerHTML = `${tempC}`;
// }
// function temperatureF(event) {
//  event.preventDefault();
//  let tempC = 2;
//  let tempF = Math.round((tempC * 9) / 5 + 32);
//  let fahrengeit = document.querySelector("#temperature");
//  fahrengeit.innerHTML = `${tempF}`;
// }

// let celsium = document.querySelector("#celsium");
// celsium.addEventListener("click", temperatureC);
// let fahrenheite = document.querySelector("#fahrenheit");
// fahrenheite.addEventListener("click", temperatureF);
