import React, { Component } from 'react';
import { Header } from './Header';
import { WeatherDashboard } from './Weather/WeatherDashboard';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Weather" />
        
        <div className="mt-lg-5">
          <div className="col-lg-12 p-0 mx-auto">
            <WeatherDashboard />
          </div>
        </div>
      </div>
      );
  }
}

export default App;
