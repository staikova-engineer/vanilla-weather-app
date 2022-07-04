function showTemp(response) {
  console.log(response.data);
  let cityElement = document.querySelector(".city");
  let tempElement = document.querySelector(".number");
  let descriptionElement = document.querySelector(".desc");
  let humidityElement = document.querySelector(".humidity");
  let windElement = document.querySelector(".wind");
  cityElement.innerHTML = response.data.name;
  tempElement.innerHTML = Math.round(response.data.main.temp);
  descriptionElement.innerHTML = response.data.weather[0].main;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = `f37ae7e0407a8ea1d736a1fcc1e6133a`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tallinn&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemp);
