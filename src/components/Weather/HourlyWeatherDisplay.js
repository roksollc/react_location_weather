// IMPORT PACKAGE REFERENCES
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT COMPONENT REFERENCES
import HourlyWeatherForecastCard from './HourlyWeatherForecastCard';

// IMPORT CSS
import '../../styles/HourlyWeatherDisplay.css';

// `HourlyWeatherDisplay` COMPONENT
const HourlyWeatherDisplay = (props) => {
    return (
        <div className="hourly-weather-display">
            <div className="text-center h5 pt-2">Hourly Forecast</div>
            <div className="container">
                <div className="forecasts">
                    {
                        !!props.hourlyForecasts && props.hourlyForecasts.map((fc, i) => (
                            <HourlyWeatherForecastCard key={i} forecast={fc} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

HourlyWeatherDisplay.propTypes = {
    hourlyForecasts: PropTypes.array.isRequired
};

export default HourlyWeatherDisplay;
