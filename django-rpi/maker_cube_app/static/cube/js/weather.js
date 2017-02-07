var weather;
var weatherIconHTML;
var weatherTemp;

var getWeather = function() {
  $.when(ajaxOpenWeather()).done(function(data) {
    weather = data;
    getWeatherIconHTML();
    getWeatherTemp();
  });
};

function ajaxOpenWeather() {
  var weatherData = "";
  return $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=' + window.openWeatherAPIKey(),
    dataType: "json",
    data: weatherData,
  });
}

var getWeatherIconHTML = function() {
  var weatherIcon = weather.list[0].weather[0].icon;
  var weatherIconUrl = 'http://openweathermap.org/img/w/' + weatherIcon + '.png';
  weatherIconHTML = "<img src='" + weatherIconUrl + "' height='32px,' width='32px' border='0'>";
};

var getWeatherTemp = function() {
  weatherTemp = Math.round(weather.list[0].main.temp) + '°c';
};
