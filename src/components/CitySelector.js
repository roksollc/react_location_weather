// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';

// IMPORT COMPONENT REFERENCES
//  WorldCities imports: Use the following functions 
//  for getting countries, states/regions, and cities
import { getAllCountries, getStatesOfCountry, getStateById, getCitiesOfState, getCityById } from './WorldCities/WorldCities';

// IMPORT CSS
import '../styles/CitySelector.css';

// `CitySelector` COMPONENT
class CitySelector extends Component {
    constructor(props) {
        super(props);

        // Initialize your state:
        //      Your goal is to collect a city for which to get weather
    }

    render() {
        return (
            <div>CitySelector Component</div>
        );
    }
}

export default CitySelector;
