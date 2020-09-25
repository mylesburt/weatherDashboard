
//Variables




function displayCityWeather() {

    var citySearch = $("#citySearchBar").val();
    var queryURLCWD = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=48eb8f7025236f284142f7fe0b9f55b4&units=metric";
    var queryURLFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=48eb8f7025236f284142f7fe0b9f55b4&units=metric";
    var queryURLUVIndex = "http://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longtitude + "&appid=48eb8f7025236f284142f7fe0b9f55b4";

    //AJAX request for Current Weather Data...
    $.ajax({
        url: queryURLCWD,
        method: "GET"
    }).then(function (response) {
        //City name...
        $("#cityName").text(response.name + ' 25/09/2020');
        //City temperature...
        var tempNumber = Math.round(response.main.temp);
        $("#temperature").text("Temperature: " + tempNumber + "°C");
        //City humidity...
        $("#humidity").text("Humidity: " + response.main.humidity + "%");
        //City wind speed...
        $("#windSpeed").text("Wind Speed: " + response.wind.speed + " KM/H");
    });

    /*
    //AJAX request for 5 day / 3 hour forcast data
    $.ajax({
        url: queryURLFiveDay,
        method: "GET"
    }).then(function (response) {

    });
    */




}


