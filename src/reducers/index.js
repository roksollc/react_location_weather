// IMPORT PACKAGE REFERENCES
import { combineReducers } from 'redux';

// IMPORT ACTION CONSTANTS
import {
    CountryChanged,
    StateChanged,
    CityChanged,
    LocationDataLoaded,
    CurrentWeatherDataLoaded,
    HourlyWeatherDataLoaded,
    WeatherRefresh,
    EncounteredAPIError
} from '../actions';

// INITIAL STATE
const initialLocationSelectionState = {
    country: "0",
    state: "0",
    city: "0",
}

const initialLocationState = {
    coord: {
        lat: null,
        lng: null
    }
}

const initialWeatherState = {
    current: null,
    hourly: null,
    error: false,
    errorMessage: ""
}

// REDUCERS
const locationSelection = (state = initialLocationSelectionState, action) => {
    switch(action.type) {
        case CountryChanged:
            return {
                ...state,
                country: action.countryId
            }
        case StateChanged:
            return {
                ...state,
                state: action.stateId
            }
        case CityChanged:
            return {
                ...state,
                city: action.cityId
            }
        default:
            return state
    }
}

const location = (state = initialLocationState, action) => {
    switch(action.type) {
        case LocationDataLoaded:
            return {
                ...state,
                coord: action.coord
            }
        default:
            return state
    }
}

const weather = (state = initialWeatherState, action) => {
    switch(action.type) {
        case CurrentWeatherDataLoaded:
            return {
                ...state,
                current: action.data
            }
        case HourlyWeatherDataLoaded:
            return {
                ...state,
                hourly: action.data
            }
        case WeatherRefresh:
            return {
                ...state,
                current: null,
                hourly: null
            }
        case EncounteredAPIError:
            return {
                ...state,
                error: action.error,
                errorMessage: action.message
            }
        default:
            return state
    }
}

const weatherApp = combineReducers({
    locationSelection,
    location,
    weather
});

export default weatherApp;
