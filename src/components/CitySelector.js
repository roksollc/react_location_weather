// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// IMPORT WORLD CITIES
import { getAllCountries, getStatesOfCountry, getCitiesOfState } from './WorldCities/WorldCities';

// IMPORT ACTIONS
import { changedCountry, changedState, changedCity } from '../actions';

// IMPORT CSS
import '../styles/CitySelector.css';

// `CitySelector` COMPONENT
class CitySelector extends Component {
    renderCanViewWeather() {
        if(this.props.selectedState !== "0" && this.props.selectedCity !== "0") {
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
                        <select id="country" value={this.props.selectedCountry} className="form-control"
                                onChange={e => this.props.onChangeCountry(e.target.value)}>
                            <option key="0" value="0">Select country...</option>
                            {
                                this.props.countries.map((country) =>
                                    <option key={country.id} value={country.id}>{country.name}</option>)
                            }
                        </select>
                    </div>

                    <div className="city-selector">
                        <select id="state" value={this.props.selectedState} className="form-control"
                                onChange={(e) => this.props.onChangeState(e.target.value)}>
                            <option value="0">Select state/region...</option>
                            {
                                this.props.states.map((state) =>
                                    <option key={state.id} value={state.id}>{state.name}</option>)
                            }
                        </select>
                    </div>

                    <div className="city-selector">
                        <select id="city" value={this.props.selectedCity} className="form-control"
                                onChange={(e) => this.props.onChangeCity(e.target.value)}>
                            <option value="0">Select city...</option>
                            {
                                this.props.cities.map((city) =>
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

const getStates = countryId => {
    return countryId ? getStatesOfCountry(countryId) : [];
}

const getCities = stateId => {
    return stateId ? getCitiesOfState(stateId) : [];
}

const mapStateToProps = state => {
    return {
        countries: getAllCountries(),
        states: getStates(state.locationSelection.country),
        cities: getCities(state.locationSelection.state),
        selectedCountry: state.locationSelection.country,
        selectedState: state.locationSelection.state,
        selectedCity: state.locationSelection.city
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeCountry: id => dispatch(changedCountry(id)),
        onChangeState: id => dispatch(changedState(id)),
        onChangeCity: id => dispatch(changedCity(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitySelector);
