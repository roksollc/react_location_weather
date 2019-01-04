import React, { Component } from 'react';
import { DailyWeatherForecastCard } from './DailyWeatherForecastCard';
import '../../styles/DailyWeatherDisplay.css';

class DailyWeatherDisplay extends Component {    
    render() {
        var carousel = this.props.dailyForecasts != null ?
            !!this.props.dailyForecasts && this.props.dailyForecasts.map((fc, i) => (
                <DailyWeatherForecastCard forecast={fc} key={i} />
            ))
            :
            <div className="pt-3 no-data">No Data Available - Fee Required</div>;

        return (
            <div className="daily-weather-display">
                <div className="text-center h5 pt-2">Daily</div>                
                <div className="container">
                    <div className="forecasts">
                        {carousel}
                    </div>
                </div>
            </div>
        );
    }
}

export { DailyWeatherDisplay };
