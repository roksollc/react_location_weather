// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// IMPORT COMPONENT REFERENCES
import CurrentWeatherDisplay from './CurrentWeatherDisplay';
import HourlyWeatherDisplay from './HourlyWeatherDisplay';
import CitySelector from "../CitySelector";

// IMPORT SERVICES
import WeatherService from '../../services/WeatherService';
import GeolocationService from '../../services/GeolocationService';

// IMPORT CSS
import '../../styles/WeatherDashboard.css';

// INITIALIZE SERVICES
const weatherService = new WeatherService();
const geolocationService = new GeolocationService();

// `WeatherDashboard` COMPONENT
class WeatherDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCurrentWeather: false,
            showHourlyWeather: false,
            errorLoading: false,
            errorMessage: ""
        };

        this.handleOnRefresh = this.handleOnRefresh.bind(this);
    }

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
                console.log(error);
                if(this.mounted) {
                    this.setState({ errorLoading: true, errorMessage: error });
                }
            });      
    }

    loadCurrentWeatherByPosition(position) {
        if (!position) {
            throw Error('A valid position must be specified');
        }

        weatherService
            .getCurrentWeatherByPosition(position)
            .then(weather => {
                if(this.mounted) {
                    this.setState(() => ({ weather: weather, showCurrentWeather: true }));
                }
            })
            .catch(error => {
                console.log(error);
                if(this.mounted) {
                    this.setState({ errorLoading: true, errorMessage: error });
                }
            });
    }

    loadHourlyWeatherByPosition(position) {
        if (!position) {
            throw Error('A valid position must be specified');
        }

        weatherService
            .getHourlyWeatherByPosition(position)
            .then(hourlyForecasts => {
                if(this.mounted) {
                    this.setState(() => ({ hourlyForecasts: hourlyForecasts, showHourlyWeather: true }));
                }
            })
            .catch(error => {
                console.log(error);
                if(this.mounted) {
                    this.setState({ errorLoading: true, errorMessage: error });
                }
            });
    }

    handleOnRefresh() {
        this.setState(() => ({
            showCurrentWeather: false,
            showHourlyWeather: false
        }));

        this.loadData(this.props.weatherCity, this.props.weatherState);
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

    renderWeather() {
        if(this.props.weatherCity === null || this.props.weatherState == null) {
            return this.renderNoCity();
        }

        if(!this.state.showCurrentWeather && !this.state.showHourlyWeather && !this.state.errorLoading) {
            this.loadData(this.props.weatherCity, this.props.weatherState);
        }

        return (
            <div>
                {
                    this.state.showCurrentWeather && this.state.showHourlyWeather &&
                    <div>
                        <CurrentWeatherDisplay weather={this.state.weather} onRefresh={this.handleOnRefresh} />
                        <HourlyWeatherDisplay hourlyForecasts={this.state.hourlyForecasts} />
                    </div>
                }
                {
                    (!this.state.showCurrentWeather || !this.state.showHourlyWeather) && !this.state.errorLoading &&
                    <div className="w-100 text-center mt-5">
                        <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                    </div>
                }
                {
                    this.state.errorLoading &&
                    <div className="error text-center">
                        ERROR: {this.state.errorMessage}
                    </div>
                }
            </div>
        );
    }

    renderInput() {
        return (
            <div>
                <CitySelector onChangeCity={this.props.inputChange} />
            </div>
        );
    }

    render() {
        return (this.props.mode === "none") ? this.renderInput() : this.renderWeather();
    }
}

export default WeatherDashboard;
