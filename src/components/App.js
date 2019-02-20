// IMPORT PACKAGE REFERENCES - UNCOMMENT THE NECESSARY IMPORTS
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// IMPORT COMPONENT REFERENCES - UNCOMMENT THE NECESSARY IMPORTS
import Header from './Header';
import WeatherDashboard from './Weather/WeatherDashboard';

// IMPORT CSS
// Feel free to use the classes that have been created for you in the below css file OR create your own :)
import '../styles/App.css';

// `App` Component
class App extends Component {
    // Finish the below constructor:
    
    //UNCOMMENT THE NEXT TWO LINES BELOW:
    // constructor(props) {
    //     super(props);

         // Initialize your state:
         //      You'll need the selected city and state
         //      to acquire geographic coordinates and weather
         // HINT: Look at the handleWeatherCityChange function to see what states you are working with

        // UNCOMMENT THE LINE BELOW 
        // this.handleWeatherCityChange = this.handleWeatherCityChange.bind(this);

    //UNCOMMENT the line below to close your constructor 
    // }

    handleWeatherCityChange(city, state) {
        this.setState({weatherCity: city, weatherState: state});
    }

    render() {

        return (
            // Don't forget your routing!
            //Hint! Look at the import statements to see what you need to use to route
           <Router>
                <div>
                    {/* Include the Header Component */}

                    {/* Route the WeatherDashoard component for the exact path = '/' */}
                    
                    {/* Route the WeatherDashoard component for the exact path = '/weather' */}
                    
                </div>
           </Router>
        );
    }
}

export default App;
