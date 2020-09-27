
//Variables

//Hiding Forecast cards at the begin
$("#card1").hide();

//CURENT DAY variables
var today = new Date();
var day = String(today.getDate());
var month = String(today.getMonth() + 1);
var year = today.getFullYear();
//Concatenating the current date variables...
var displayDate = day + "/" + month + "/" + year;


//Need to find out how to roll over forecast days into the next month...

//TOMORROW DATE variables
var day2 = String(today.getDate() + 1);
//Concatenating the tomorrow date variables...
var displayTomorrow = day2 + "/" + month + "/" + year;

//DAY 3 variables
var day3 = String(today.getDate() + 2);
//Concatenating the Day 3 variables...
var displayDay3 = day3 + "/" + month + "/" + year;

//DAY 4 variables
var day4 = String(today.getDate() + 3);
//Concatenating the Day 4 variables...
var displayDay4 = day4 + "/" + month + "/" + year;

//DAY 5 variables
var day5 = String(today.getDate() + 4);
//Concatenating the Day 5 variables...
var displayDay5 = day5 + "/" + month + "/" + year;

//DAY 5 variables
var day5 = String(today.getDate() + 4);
//Concatenating the Day 5 variables...
var displayDay5 = day5 + "/" + month + "/" + year;

console.log(displayDate);
console.log(displayTomorrow);
console.log(displayDay3);
console.log(displayDay4);
console.log(displayDay5);


function displayCityWeather() {

    var citySearch = $("#citySearchBar").val();
    var queryURLCWD = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=48eb8f7025236f284142f7fe0b9f55b4&units=metric";

    //AJAX request for Current Weather Data...
    $.ajax({
        url: queryURLCWD,
        method: "GET"
    }).then(function (response) {
        //City name with date...
        $("#cityName").text(response.name + " " + displayDate);
        //City temperature...
        var tempNumber = Math.round(response.main.temp);
        $("#temperature").text("Temperature: " + tempNumber + "°C");
        //City humidity...
        $("#humidity").text("Humidity: " + response.main.humidity + "%");
        //City wind speed...
        $("#windSpeed").text("Wind Speed: " + response.wind.speed + " KM/H");

        //Grabbing longtitude and latitude for UV Index...
        var long = response.coord.lon;
        var lat = response.coord.lat;

        //UV Index API URL...
        var queryURLUVIndex = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + long + "&appid=48eb8f7025236f284142f7fe0b9f55b4";

        //AJAX request for UV Index
        $.ajax({
            url: queryURLUVIndex,
            method: "GET"
        }).then(function (response) {

            var uvIndexValue = response.value;

            var indexLow = $("<span>");
            indexLow.addClass("badge badge-success");
            indexLow.text(response.value);

            var indexMid = $("<span>");
            indexMid.addClass("badge badge-warning");
            indexMid.text(response.value);

            var indexHigh = $("<span>");
            indexHigh.addClass("badge badge-danger");
            indexHigh.text(response.value);

            if (uvIndexValue <= 3) {
                $("#uvIndex").append(indexLow);
            }
            else if (uvIndexValue <= 7) {
                $("#uvIndex").append(indexMid);
            }
            else if (uvIndexValue => 7) {
                $("#uvIndex").append(indexHigh);
            }


        });
    });
}

//Show forecast cards...
$(document).ready(function () {
    $("#searchBtn").on("click", function () {
        $("#card1").show();
    });
});

