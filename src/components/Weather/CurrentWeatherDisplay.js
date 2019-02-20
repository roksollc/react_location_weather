// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// IMPORT CSS
// Feel free to use the classes that have been created for you in the below css file OR create your own :)
import '../../styles/CurrentWeatherDisplay.css';

// `CurrentWeatherDisplay` COMPONENT
//Good to know: This component is called on by the WeatherDashboard component
class CurrentWeatherDisplay extends Component {
    render() {
        //Use this variable to help render properties of your component
        const {weather} = this.props;


        return (
             // Use the weather variable above to access the weather location's name, and the temperature's max, min, and current. 
             //It is up to you how you want to format the html elements. For example if you want to put the Weather location's name in a h1 element or a paragraph element that's completely up to you.
            <div>
                
            </div>
        );
    }
};

CurrentWeatherDisplay.propTypes = {
    weather: PropTypes.object.isRequired
};

export default CurrentWeatherDisplay;
