var getWeather = function() {
  $.when(ajaxOpenWeather()).done(function(data) {
    var icon = data.weather[0].icon;
    iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png';
    document.getElementById("weatherDiv").innerHTML ="<img src='" + iconUrl + "' height='32px,' width='32px' border='0'>";
  });
};

function ajaxOpenWeather() {
  var weatherData = "";
  return $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=' + window.openWeatherAPIKey(),
    dataType: "json",
    data: weatherData,
  });
}
