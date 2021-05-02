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

setInterval(() => {
    cities.forEach(city => {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pl`;
    
        fetch(url)
            .then(response => response.json())
            .then(data => wBox = setBox(data))
            .then(wBox => showOnPage(wBox))
            .then(() => console.log(wBox));    
    })
}, 60000);

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
    let box = document.querySelector(`#${weatherBox.city.name}`)
    let cityInfo, weatherInfo, mainInfo

    if(box === null) {
        box = document.createElement('div');
        box.className = 'weatherBox';
        box.id = weatherBox.city.name;
        document.body.appendChild(box);

        cityInfo = document.createElement('div');
        cityInfo.className = 'cityInfo';
        box.appendChild(cityInfo);

        weatherInfo = document.createElement('div');
        weatherInfo.className = 'weatherInfo';
        box.appendChild(weatherInfo);

        mainInfo = document.createElement('div');
        mainInfo.className = 'mainInfo';
        box.appendChild(mainInfo);
    } else {
        cityInfo = box.querySelector('.cityInfo')
        weatherInfo = box.querySelector('.weatherInfo')
        mainInfo = box.querySelector('.mainInfo')
    }

    cityInfo.innerHTML = `${weatherBox.city.name}, ${weatherBox.city.country}, UTC+${weatherBox.city.timezone/3600}`
    weatherInfo.innerHTML = `${weatherBox.weather.main} - ${weatherBox.weather.description}`
    mainInfo.innerHTML = `Temperatura: ${weatherBox.main.temp}&degC, ciśnienie ${weatherBox.main.pressure} hPa, wilgotność powietrza: ${weatherBox.main.humidity}%`
}

function updateWeather(weatherBox: WeatherBox) :void {
    let boxes = document.querySelectorAll('.weatherBox') as NodeListOf<HTMLDivElement>;


}

function updateElement(el: HTMLDivElement, innerMessage: string): void {

}
