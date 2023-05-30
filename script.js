
var apiKey = "2e6edd179a0c9a8b373ee7a8c7502179"
function getWeather (x) {
    var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+ x +"&appid="+apiKey;
    fetch(weatherUrl)
    .then(function(response) {
        console.log("RESPONSE: ",response);
        return response.json()
    })
    .then(function (result) {
        console.log("RESULT: ", result.list[0].weather[0].main)
    })
}

getWeather("Phoenix");
const city = document.getElementById('city');
function updateWeather(cityName)
searchForm.addEventListener('submit', handleFormSubmit);