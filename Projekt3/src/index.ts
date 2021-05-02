import './style.scss';
import { WeatherBox } from "./weather-box"

const cities = [ 'Kraków', 'Warszawa', 'Londyn', 'Madryt' ]

const key = '26d7bb3aebea98160fd283b90481b491'
let wBox: WeatherBox;

cities.forEach(city => {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pl`;

    fetch(url)
        .then(response => response.json())
        .then(data => wBox = setBox(data))
        .then(wBox => showOnPage(wBox));    
})


//const london = require("../tempPopulate/london.json")

function setBox(data: any) {
    const wBox: WeatherBox = {
        weather: {
            id: data['weather']['id'],
            main: data['weather'][0]['main'],
            description: data['weather'][0]['description']
        },
        city: {
            timezone: data['timezone'],
            id: data['id'],
            name: data['name'],
            country: data['sys']['country'],
            sunrise: data['sys']['sunrise'],
            sunset: data['sys']['sunset'],
            dt: data['dt']
        },
        main: {
            temp: data['main']['temp'],
            pressure: data['main']['pressure'],
            humidity: data['main']['humidity'],
            tempMin: data['main']['temp_min'],
            tempMax: data['main']['temp_max']
        }
    }

    return wBox
}

function showOnPage(weatherBox: WeatherBox) :void {
    const box = document.createElement('div');
    box.className = 'weatherBox';

    const cityInfo = document.createElement('div');
    box.className = 'cityInfo';

    const weatherInfo = document.createElement('div');
    weatherInfo.className = 'weatherInfo';

    const mainInfo = document.createElement('div');
    weatherInfo.className = 'mainInfo';

    cityInfo.innerHTML = `${weatherBox.city.name}, ${weatherBox.city.country}, UTC+${weatherBox.city.timezone/3600}`
    weatherInfo.innerHTML = `${weatherBox.weather.main} - ${weatherBox.weather.description}`
    mainInfo.innerHTML = `Temperatura: ${weatherBox.main.temp}&degC, ciśnienie ${weatherBox.main.pressure} hPa, wilgotność powietrza: ${weatherBox.main.humidity}%`



    box.appendChild(cityInfo);
    box.appendChild(weatherInfo);
    box.appendChild(mainInfo);
    document.body.appendChild(box);
}
