navigator.geolocation.getCurrentPosition(function(position) {
    getCoords(position.coords.latitude, position.coords.longitude);
});

function getCoords(latitude, longitude) {
    var lat = latitude.toFixed(2);
    var lon = longitude.toFixed(2);
    console.log (lat, lon);
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?APPID=5477c7f4fa528d2f1048c4cb827c4267&lat=" + lat + "&lon=" + lon, function(json) {
    console.log(JSON.stringify(json));
    displayWeatherIcon(json.weather[0].id, json.weather[0].description, json.main.temp);
    });
}

function displayWeatherIcon(id, description, temperature) {
    console.log(id, description, temperature);
    var weatherDescriptionDiv = document.getElementById("weatherDescription");
    var weatherDescriptionP = document.createElement("p");
    weatherDescriptionP.innerHTML = description;
    weatherDescriptionDiv.appendChild(weatherDescriptionP);

    var temperatureDiv= document.getElementById("temperature");
    var temperatureP= document.createElement("p");
    temperatureP.innerHTML = (temperature -273.15).toFixed(1);
    temperatureDiv.appendChild(temperatureP);

    var iconCode = "";
    if (id > 199 && id < 233) {
        iconCode = "wi-thunderstorm";
    } else if (id > 299 && id < 322) {
        iconCode = "wi-showers";
    } else if (id > 499 && id < 532) {
        iconCode = "wi-rain";
    } else if (id > 599 && id < 623) {
        iconCode = "wi-snow";
    }  else if (id > 700 && id < 782) {
        iconCode = "wi-dust";
    } else if (id === 800) {
        iconCode = "wi-day-sunny";
    } else if (id > 800 && id < 804) {
        iconCode = "wi-day-sunny-overcast";
    } else if (id === 804) {
        iconCode = "wi-cloudy";
    } else if (id > 899 && id < 907) {
        iconCode = "wi-tornado";
    }
var weatherIcon = document.getElementById("weatherIcon");
var i = document.createElement("i");
i.classList.add("wi");
i.classList.add(iconCode);
weatherIcon.appendChild(i);
}

