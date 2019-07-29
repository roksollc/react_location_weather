// IMPORT JSON DATA
var countryList = require("./lib/country.json")
var stateList = require("./lib/state.json")
var cityList = require("./lib/city.json")

// FUNCTIONS TO ACCESS JSON DATA
var WorldCities = {
	getCountryById: (id) => _findEntry(countryList, id),
	getStateById: (id) => _findEntry(stateList, id),
	getCityById: (id) => _findEntry(cityList, id),
	getStatesOfCountry: (countryId) => stateList.filter((val,) => val.country_id === countryId),
	getCitiesOfState: (stateId) => cityList.filter((val,) => val.state_id === stateId),
	getAllCountries: () => countryList
}

const _findEntry = (source, id) => {
	if(!isNaN(id) && source != null) {
		const idx = source.findIndex((c,) => c.id === id);
		return (idx !== -1) ? source[idx] : "";
	}
	return "";
}

module.exports = WorldCities;
