$(function(){
  console.log('jquery working')
  $(".pure-button").click(function(){
      event.preventDefault();
      cityState = $(".pure-input-rounded").val()
      console.log(cityState);
      $.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityState, function(data, status){
          if ($(".city-state").text()!==""){
            cityStateName = $(".city-state").text("In " + data["name"]);
            weatherDiv = $(".weather-dump").text("It's " + (data['main']['temp'] - 273) + " degress celcius");
          } else {
            cityStateName = $("<div class='city-state'><div>");
            cityStateName.text("In " + data["name"]);
            weatherDiv = $("<div class='weather-dump'></div>");
            weatherDiv.text("It's " + (data['main']['temp'] - 273) + " degress celcius");
            $("body").append(cityStateName);
            $("body").append(weatherDiv);
          }
      });
  });
})