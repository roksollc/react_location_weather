// IMPORT PACKAGE REFERENCES
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// IMPORT COMPONENT REFERENCES
import Header from './Header';
import WeatherDashboard from './Weather/WeatherDashboard';

// IMPORT CSS
import '../styles/App.css';

// `App` COMPONENT
const App = props => {
    return (
        <BrowserRouter>
            <div>
                <Header title="Weather" />

                <div className="mt-lg-5">
                    <div className="col-lg-12 p-0 mx-auto">
                        <Route exact path='/' render={_ => <WeatherDashboard mode="none" />} />
                        <Route path='/weather' render={_ => <WeatherDashboard mode="weather" />} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
