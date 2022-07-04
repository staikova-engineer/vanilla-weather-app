function formatDate(timestamp) {
  let date = new Date(timestamp);

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let week = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  let day = week[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function showTemp(response) {
  let cityElement = document.querySelector(".city");
  let tempElement = document.querySelector(".number");
  let descriptionElement = document.querySelector(".desc");
  let humidityElement = document.querySelector(".humidity");
  let windElement = document.querySelector(".wind");
  let dateElement = document.querySelector(".date-time");
  let iconElement = document.querySelector(".icon");

  cityElement.innerHTML = response.data.name;
  tempElement.innerHTML = Math.round(response.data.main.temp);
  descriptionElement.innerHTML = response.data.weather[0].main;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", `response.data.weather[0].main`);
}

let apiKey = `f37ae7e0407a8ea1d736a1fcc1e6133a`;
let city = `oslo`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemp);
