// API Key - Change to your API_KEY
const WEATHER_API_KEY = "a5b3a0012762ca96a1ff99a373f3686e";

// base URL to OpenWeatherMap API
const WEATHER_BASE_URL = 'http://api.openweathermap.org/data/2.5';

// base URL for images at OpenWeatherMap
const WEATHER_IMG_URL = 'http://openweathermap.org/img/w';

// `getWeather` FUNCTION
const getWeather = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if(data.cod === 0) {
                    const { main, icon } = data.weather[0];
                    const { temp, temp_min, temp_max } = data.main;
                    const { lon, lat } = data.coord;
                    const { dt, name } = data;
                    resolve({
                        condition: main,
                        date: new Date(dt * 1000),
                        icon: `${WEATHER_IMG_URL}/${icon}.png`,
                        location: {
                            name: name,
                            latitude: lat,
                            longitude: lon
                        },
                        temperature: {
                            current: temp,
                            minimum: temp_min,
                            maximum: temp_max
                        }
                    });
                }
                else if(data.cod === 429) {
                    reject('Too many requests to weather API');
                }
                else {
                    reject('Unknown error with weather API');
                }
            })
            .catch(error => reject(error.message));
    });
};

// `getHourlyWeather` FUNCTION
const getHourlyWeather = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if(data.cod === 0) {
                    const location = {
                        name: data.city.name,
                        latitude: data.city.coord.lat,
                        longitude: data.city.coord.lon
                    };                    

                    const hourlyForecasts = data.list.map(fc => {
                        return {
                            condition: fc.weather[0].description,
                            date: new Date(fc.dt * 1000),
                            icon: `${WEATHER_IMG_URL}/${fc.weather[0].icon}.png`,
                            location: location,
                            temperature: {
                                current: fc.main.temp
                            }
                        };
                    });
                    
                    resolve(hourlyForecasts);
                }
                else if(data.cod === 429) {
                    reject('Too many requests to weather API');
                }
                else {
                    reject('Unknown error with weather API');
                }
            })
            .catch(error => reject(error.message));
    });
};

// `WeatherService` CLASS
class WeatherService {
    getCurrentWeatherByPosition({latitude, longitude}) {
        if (!latitude) throw Error('Latitude is required');
        if (!longitude) throw Error('Longitude is required');

        const url = `${WEATHER_BASE_URL}/weather?appid=${WEATHER_API_KEY}&lat=${latitude}&lon=${longitude}&units=imperial`;
        return getWeather(url);
    }

    getHourlyWeatherByPosition({latitude, longitude}) {
        if (!latitude) throw Error('Latitude is required');
        if (!longitude) throw Error('Longitude is required');

        const url = `${WEATHER_BASE_URL}/forecast?appid=${WEATHER_API_KEY}&lat=${latitude}&lon=${longitude}&units=imperial&cnt=12`;
        return getHourlyWeather(url);
    }
}

export default WeatherService;
