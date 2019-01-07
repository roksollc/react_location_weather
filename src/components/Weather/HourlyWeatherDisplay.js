// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// IMPORT COMPONENT REFERENCES
import HourlyWeatherForecastCard from './HourlyWeatherForecastCard';

// IMPORT CSS
import '../../styles/HourlyWeatherDisplay.css';

// `HourlyWeatherDisplay` COMPONENT
class HourlyWeatherDisplay extends Component {
    render() {
        return (
            <div className="hourly-weather-display">
                <div className="text-center h5 pt-2">Hourly Forecast</div>
                <div className="container">
                    <div className="forecasts">
                        {
                            !!this.props.hourlyForecasts && this.props.hourlyForecasts.map((fc, i) => (
                                <HourlyWeatherForecastCard key={i} forecast={fc} />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

HourlyWeatherDisplay.propTypes = {
    hourlyForecasts: PropTypes.array.isRequired
};

export default HourlyWeatherDisplay;
