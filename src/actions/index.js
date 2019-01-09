// constants and actions related to  selecting a country, state/region, or city

export const CountryChanged = 'country_changed';
export const StateChanged = 'state_changed';
export const CityChanged = 'city_changed';

export const changedCountry = countryId => {
    return {
        type: CountryChanged,
        countryId
    }
}

export const changedState = stateId => {
    return {
        type: StateChanged,
        stateId
    }
}

export const changedCity = cityId => {
    return {
        type: CityChanged,
        cityId
    }
}


// constant and action related to loading geographic data from MapQuest API
export const LocationDataLoaded = 'location_data_loaded';

export const loadedLocationData = coord => {
    return {
        type: LocationDataLoaded,
        coord
    }
}


// constants and actions related to loading weather data from OpenWeatherMap API
export const CurrentWeatherDataLoaded = 'current_weather_data_loaded';
export const HourlyWeatherDataLoaded = 'hourly_weather_data_loaded';
export const WeatherRefresh = 'current_weather_refresh';

export const loadedCurrentWeatherData = data => {
    return {
        type: CurrentWeatherDataLoaded,
        data
    }
}

export const loadedHourlyWeatherData = data => {
    return {
        type: HourlyWeatherDataLoaded,
        data
    }
}

export const refreshWeather = () => {
    return {
        type: WeatherRefresh
    }
}

// constant and action related to API errors
export const EncounteredAPIError = 'encountered_api_error';

export const apiError = (error, message) => {
    return {
        type: EncounteredAPIError,
        error,
        message
    }
}
