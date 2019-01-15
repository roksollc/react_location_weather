// API Key - Change to your API_KEY
const GEO_API_KEY = "MAPQUEST_API_KEY";

// base URL to MapQuest API
const GEO_BASE_URL = 'http://www.mapquestapi.com/geocoding/v1/address';

// `GeolocationService` CLASS
class GeolocationService {
    getCurrentPosition(city, state) {
        if(!city) throw Error("city is required");
        if(!state) throw Error("state is required");

        // URL to use to acquire the geographic coordinates for a city, state/region
        // `city` and `state` must be valid string values (e.g. Baltimore,MD)
        // Don't forget to set your `GEO_API_KEY`
        const url = `${GEO_BASE_URL}?key=${GEO_API_KEY}&location=${city},${state}`;

        return new Promise((resolve, reject) => {
            // fetch the data using the above URL
                // THEN convert response into JSON object
                // THEN process the `response`
                    // IF `response.info.statuscode` equals `0`, there is no error, so...
                        // `response.results` is an array of results
                            //  - the first one is all you'll need
                        // `response.results[0].locations` is an array of matching locations
                            // - the first one is all you'll need
                        // `response.results[0].locations[0].latLng` is the geographic
                            // coordinates for the 1st location of the 1st result
                            // `latLng` is comprised of `lat` and `lng`
                    // ELSE IF ERROR
                        // `response.info.messages` is an array of error messages (strings)
        });
    }
}

export default GeolocationService;
