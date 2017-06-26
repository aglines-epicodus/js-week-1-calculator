var Time = require('./../js/time.js').timeModule;

var apiKey = "bf9a6263d6d6ffa211df8c15b51c59d9";

$(document).ready(function(){
  $('#time').text(moment());
  $('#weather-location').click(function(){
    var city = "Portland,or"
    $('#location').val("");
    $('.showWeather').text("TESTING City = " + city);
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response){
      console.log(response);
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    });
  });
});
