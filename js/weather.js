const API_KEY = "0eaabd3bcce1c2217c74bc44fdb962f9";
//함수를 사용하여 위치 알아내기
function geoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}

function geoErr() {
  alert("Can't find you!");
}
navigator.geolocation.getCurrentPosition(geoOk, geoErr);
