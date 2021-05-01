import './style.scss';
import { WeatherBox } from "./weather-box"

let link = 'http://api.openweathermap.org/data/2.5/weather?q=london&appid=26d7bb3aebea98160fd283b90481b491&units=metric';

const london = require("../tempPopulate/london.json")

const wBox: WeatherBox = {
    weather: {
        id: london['weather']['id'],
        main: london['weather'][0]['main'],
        description: london['weather'][0]['description']
    },
    city: {
        timezone: london['timezone'],
        id: london['id'],
        name: london['name'],
        country: london['sys']['country'],
        sunrise: london['sys']['sunrise'],
        sunset: london['sys']['sunset'],
        dt: london['dt']
    },
    main: {
        temp: london['main']['temp'],
        pressure: london['main']['pressure'],
        humidity: london['main']['humidity'],
        tempMin: london['main']['temp_min'],
        tempMax: london['main']['temp_max']
    }
}

const box = document.createElement('div');
box.className = 'weatherBox';

const cityInfo = document.createElement('div');
box.className = 'cityInfo';

const weatherInfo = document.createElement('div');
weatherInfo.className = 'weatherInfo';

const mainInfo = document.createElement('div');
weatherInfo.className = 'mainInfo';

cityInfo.innerHTML = `${wBox.city.name}, ${wBox.city.country}, UTC+${wBox.city.timezone/3600}`
weatherInfo.innerHTML = `${wBox.weather.main} - ${wBox.weather.description}`
mainInfo.innerHTML = `Temperature: ${wBox.main.temp}, pressure ${wBox.main.pressure} hPa, humidity: ${wBox.main.humidity}%`



box.appendChild(cityInfo);
box.appendChild(weatherInfo);
box.appendChild(mainInfo);
document.body.appendChild(box);
