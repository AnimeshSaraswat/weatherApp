var classApp = angular.module('weatherApp', []);

classApp.controller('weatherCtrl', function($scope, $http) {
  var scope = $scope;
  $http.get("http://ip-api.com/json").success(function(data) {
    scope.city = data.city;
    scope.contry = data.countryCode;

    var apiKey = "95cfd3935be957ca5017b97a535c2f0a";
    var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + scope.city + "," + scope.country + "&appid=" + apiKey;

    $http.get(openWeatherURL).success(function(data) {
      scope.description = data.weather[0].description;
      scope.icon1 = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
      scope.date = data.dt;
      scope.parseDate = function (time) {
          return new Date(time * 1000);
        };
      scope.weatherIcon = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
      scope.mainTemp = (data.main.temp - 273.15).toFixed(1) + "°C";
      scope.descriptions = data.weather.description;
      scope.maxTemp = (data.main.temp_max - 273.15).toFixed(2) + "°C";
      scope.minTemp = (data.main.temp_min - 273.15).toFixed(2) + "°C";
      scope.humidity = data.main.humidity + "%";
    })
  })
});
