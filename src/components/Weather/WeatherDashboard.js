// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// IMPORT COMPONENT REFERENCES
import CurrentWeatherDisplay from './CurrentWeatherDisplay';
import HourlyWeatherDisplay from './HourlyWeatherDisplay';
import CitySelector from "../CitySelector";

// IMPORT ACTIONS
import {
    loadedLocationData,
    loadedCurrentWeatherData,
    loadedHourlyWeatherData,
    refreshWeather,
    apiError
} from '../../actions';

// IMPORT WORLD CITIES
import { getCityById, getStateById } from '../WorldCities/WorldCities';

// IMPORT CSS
import '../../styles/WeatherDashboard.css';

// IMPORT AND INITIALIZE SERVICES
import WeatherService from '../../services/WeatherService';
import GeolocationService from '../../services/GeolocationService';

const weatherService = new WeatherService();
const geolocationService = new GeolocationService();

// `WeatherDashboard` COMPONENT
class WeatherDashboard extends Component {
    componentDidMount() {
        this.mounted = true;
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    loadData(city, state) {
        geolocationService
            .getCurrentPosition(city, state)
            .then(pos => {
                if(this.mounted) {
                    this.loadCurrentWeatherByPosition(pos);
                    this.loadHourlyWeatherByPosition(pos);
                }
            })
            .catch(error => {
                if(this.mounted) {
                    this.props.onAPIError(true, error.message);
                }
            });      
    }

    loadCurrentWeatherByPosition(position) {
        if (!position) {
            throw Error('A valid position must be specified');
        }

        weatherService
            .getCurrentWeatherByPosition(position)
            .then(data => {
                if(this.mounted) {
                    this.props.onCurrentWeatherData(data);
                }
            })
            .catch(error => {
                if(this.mounted) {
                    this.props.onAPIError(true, error.message);
                }
            });
    }

    loadHourlyWeatherByPosition(position) {
        if (!position) {
            throw Error('A valid position must be specified');
        }

        weatherService
            .getHourlyWeatherByPosition(position)
            .then(data => {
                if(this.mounted) {
                    this.props.onHourlyWeatherData(data);
                }
            })
            .catch(error => {
                if(this.mounted) {
                    this.props.onAPIError(true, error.message);
                }
            });
    }

    renderNoCity() {
        return (
            <div className="no-city text-center">
                <Link to="/">
                    <h2>Click to choose a city.</h2>
                </Link>
            </div>
        );
    }

    renderErrorMessage() {
        if(this.props.errorLoading) {
            return (
                <div className="error text-center">
                    API ERROR: {this.props.errorMessage}
                </div>
            );
        }
        else return <div></div>;
    }

    renderWeather() {
        if(this.props.weatherCity === null || this.props.weatherState == null) {
            return this.renderNoCity();
        }

        if(!this.props.weather && !this.props.hourlyForecasts && !this.props.errorLoading) {
            this.loadData(this.props.weatherCity, this.props.weatherState);
        }

        return (
            <div>
                {
                    this.props.weather && this.props.hourlyForecasts &&
                    <div>
                        <CurrentWeatherDisplay weather={this.props.weather} onRefresh={this.props.onRefresh} />
                        <HourlyWeatherDisplay hourlyForecasts={this.props.hourlyForecasts} />
                    </div>
                }
                {
                    (!this.props.weather || !this.props.hourlyForecasts) && !this.props.errorLoading &&
                    <div className="w-100 text-center mt-5">
                        <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                    </div>
                }
                {
                    this.renderErrorMessage()
                }
            </div>
        );
    }

    renderInput() {
        return <div><CitySelector /></div>;
    }

    render() {
        return (this.props.mode === "none") ? this.renderInput() : this.renderWeather();
    }
}

const getCityName = cityId => {
    let city = getCityById(cityId);
    return (city === "") ? null : city.name;
}

const getStateName = stateId => {
    let state = getStateById(stateId);
    return (state === "") ? null : state.name;
}

const mapStateToProps = state => {
    return {
        weatherCity: getCityName(state.locationSelection.city),
        weatherState: getStateName(state.locationSelection.state),
        weather: state.weather.current,
        hourlyForecasts: state.weather.hourly,
        errorLoading: state.weather.error,
        errorMessage: state.weather.errorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLocationData: coord => dispatch(loadedLocationData(coord)),
        onCurrentWeatherData: d => dispatch(loadedCurrentWeatherData(d)),
        onHourlyWeatherData: d => dispatch(loadedHourlyWeatherData(d)),
        onAPIError: (e, m) => dispatch(apiError(e, m)),
        onRefresh: _ => dispatch(refreshWeather())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDashboard);
