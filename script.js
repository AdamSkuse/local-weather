var latitude
var longitude

navigator.geolocation.getCurrentPosition(function(position) {
  getCoords(position.coords.latitude, position.coords.longitude);
});

function getCoords(latitude, longitude) {
    var lat = latitude.toFixed(2);
    var lon = longitude.toFixed(2);
    console.log (lat, lon);
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?APPID=5477c7f4fa528d2f1048c4cb827c4267&lat=" + lat + "&lon=" + lon, function(json) {
    console.log(JSON.stringify(json));
    });
}


