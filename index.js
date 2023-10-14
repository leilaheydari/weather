const apiKey = "f38213d5f8378acd6ca1aebe77a35e11";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weatherIcon");

async function checkWeather(city) {
    const response = await fetch(apiUrl.concat(city).concat(`&appid=${apiKey}`));
    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        const data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        const temp = Math.round(data.main.temp);
        document.querySelector(".temp").innerHTML = `${temp}°c`;
        const humidity = data.main.humidity;
        document.querySelector(".humidity").innerHTML = `${humidity} %`
        const wind = data.wind.speed;
        document.querySelector(".wind").innerHTML = `${wind} km/h`;
        const WeatherType = data.weather[0].main
        switch (WeatherType) {
            case 'Clouds':
                WeatherIcon.src = "images/cloudy.png"
                break;

            case 'Clear':
                WeatherIcon.src = "images/sun.png"
                break;

            case 'Drizzle':
                WeatherIcon.src = "images/drizzle.png"
                break;

            case 'Mist':
                WeatherIcon.src = "images/mist.png"
                break;

            case 'Rain':
                WeatherIcon.src = "images/rain.png"
                break;

            case 'Snow':
                WeatherIcon.src = "images/snow.png"
                break;

        }
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "flex";
    }
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
