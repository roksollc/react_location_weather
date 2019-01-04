import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HourlyWeatherForecastCard } from './HourlyWeatherForecastCard';
import '../../styles/HourlyWeatherDisplay.css';

class HourlyWeatherDisplay extends Component {
    render(){
        return (
            <div className="hourly-weather-display">
                <div className="text-center h5 pt-2">Hourly</div>
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

export { HourlyWeatherDisplay };