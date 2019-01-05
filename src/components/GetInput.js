// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// IMPORT COMPONENT REFERENCES
import { getAllCountries, getStatesOfCountry, getStateById, getCitiesOfState, getCityById } from './WorldCities/WorldCities';

// IMPORT CSS
import '../styles/GetInput.css';


class GetInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            countries: [],
            states: [],
            cities: [],
            selectedCountry: "0",
            selectedState: "0",
            selectedCity: "0"
        };
    }

    componentDidMount() {
        let countries = getAllCountries();
        this.setState({countries: countries});
        this.props.onChangeCity(null, null);
    }

    countrySelected(key) {
        let states = getStatesOfCountry(key);
        this.setState({selectedCountry: key, states: states, selectedState: "0", selectedCity: "0"})
        this.props.onChangeCity(null, null);
    }

    stateSelected(key) {
        let cities = getCitiesOfState(key);
        this.setState({selectedState: key, cities: cities, selectedCity: "0"})
        this.props.onChangeCity(null, null);
    }

    citySelected(key) {
        let city = getCityById(key);
        let state = getStateById(this.state.selectedState);
        this.setState({selectedCity: key});
        this.props.onChangeCity(city.name, state.name);
    }

    renderCanViewWeather() {
        if(this.state.selectedState !== "0" && this.state.selectedCity !== "0") {
            return (
                <div className="can-view-weather">
                    <i className="fa fa-bolt"></i>
                    &nbsp;
                    <Link to="/weather">You can now view weather for the selected city</Link>
                    &nbsp;
                    <i className="fa fa-bolt"></i>
                </div>
            );
        }
        else return <div></div>;
    }

    render() {
        return (
            <div className="get-input">
                <div className="text-center h2 pt-2">Choose a City</div>

                <div className="city-selector-group">

                    <div className="city-selector">
                        <select id="country" value={this.state.selectedCountry} className="form-control"
                            onChange={(e) => this.countrySelected(e.target.value)}>
                            <option key="0" value="0">Select country...</option>
                            {
                                this.state.countries.map((country) =>
                                    <option key={country.id} value={country.id}>{country.name}</option>)
                            }
                        </select>
                    </div>

                    <div className="city-selector">
                        <select id="state" value={this.state.selectedState} className="form-control"
                            onChange={(e) => this.stateSelected(e.target.value)}>
                            <option value="0">Select state/region...</option>
                            {
                                this.state.states.map((state) =>
                                    <option key={state.id} value={state.id}>{state.name}</option>)
                            }
                        </select>
                    </div>

                    <div className="city-selector">
                        <select id="city" value={this.state.selectedCity} className="form-control"
                            onChange={(e) => this.citySelected(e.target.value)}>
                            <option value="0">Select city...</option>
                            {
                                this.state.cities.map((city) =>
                                    <option key={city.id} value={city.id}>{city.name}</option>)
                            }
                        </select>
                    </div>

                    {this.renderCanViewWeather()}

                </div>
            </div>
        );
    }
}


export default GetInput;