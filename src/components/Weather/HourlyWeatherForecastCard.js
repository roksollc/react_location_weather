// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// `getTime` FUNCTION
const getTime = (date) => {
    return `${date.getHours()}:00`;
};

// `HourlyWeatherForecastCard` COMPONENT
class HourlyWeatherForecastCard extends Component {
    render() {
        const { forecast } = this.props;

        return (
            <div className="hourly-weather-card">
                <small>{getTime(forecast.date)}</small>
                <img alt="forecast" className="icon mx-auto" src={forecast.icon} />
                <div className="font-weight-bold">
                    {parseInt(forecast.temperature.current)}&deg;
                </div>
                <div className="text-capitalize">
                    <small>{forecast.condition}</small>
                </div>
            </div>
        );
    }
}

HourlyWeatherForecastCard.propTypes = {
    forecast: PropTypes.object.isRequired
};

export default HourlyWeatherForecastCard;
