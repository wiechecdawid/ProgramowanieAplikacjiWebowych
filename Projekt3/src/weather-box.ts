export interface WeatherBox {
    city: City,
    weather: Weather,
    main: Main
}

interface City {
    timezone: number,
    id: number,
    name: string,
    country: string,
    sunrise: number,
    sunset: number,
    dt: number
}

export interface Weather {
    id: number,
    main: string,
    description: string
}

interface Main {
    temp: number,
    pressure: number,
    humidity: number,
    tempMin: number,
    tempMax: number
}