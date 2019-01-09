// API Key - Change to your API_KEY
const WEATHER_API_KEY = "OPEN_WEATHER_MAP_API_KEY";

// base URL to OpenWeatherMap API
const WEATHER_BASE_URL = 'http://api.openweathermap.org/data/2.5';

// base URL for images at OpenWeatherMap
const WEATHER_IMG_URL = 'http://openweathermap.org/img/w';

// `WeatherService` CLASS
class WeatherService {
    getCurrentWeatherByPosition({latitude, longitude}) {
        // You can use this function to fetch current weather data
        // for a geopolitical coordinate using the OpenWeatherMap API.

        // Don't forget promises!
    }

    getHourlyWeatherByPosition({latitude, longitude}) {
        // You can use this function to fetch hourly weather data
        // for a geopolitical coordinate using the OpenWeatherMap API.

        // Don't forget promises!
    }
}

export default WeatherService;
