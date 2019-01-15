// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// IMPORT COMPONENT REFERENCES
import Header from './Header';
import WeatherDashboard from './Weather/WeatherDashboard';

// IMPORT CSS
import '../styles/App.css';

// `App` COMPONENT
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weatherCity: null,
            weatherState: null
        }

        this.handleWeatherCityChange = this.handleWeatherCityChange.bind(this);
    }

    handleWeatherCityChange(city, state) {
        this.setState({weatherCity: city, weatherState: state});
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header title="Weather" />
            
                    <div className="mt-lg-5">
                        <div className="col-lg-12 p-0 mx-auto">
                            <Route exact path='/' render={(props) => 
                                <WeatherDashboard mode="none"
                                                  inputChange={this.handleWeatherCityChange}
                                                  weatherCity={this.state.weatherCity}
                                                  weatherState={this.state.weatherState} />} />

                            <Route exact path='/weather' render={(props) => 
                                <WeatherDashboard mode="weather" 
                                                  weatherCity={this.state.weatherCity}
                                                  weatherState={this.state.weatherState} />} />

                            <Route path={`/weather/:city,:state`} component={WeatherDashboard} />

                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
