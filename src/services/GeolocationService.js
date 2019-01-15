// API Key - Change to your API_KEY
const GEO_API_KEY = "MAPQUEST_API_KEY";

// base URL to MapQuest API
const GEO_BASE_URL = 'http://www.mapquestapi.com/geocoding/v1/address';

// `GeolocationService` CLASS
class GeolocationService {
    getCurrentPosition(city, state) {
        if(!city) throw Error("city is required");
        if(!state) throw Error("state is required");

        const url = `${GEO_BASE_URL}?key=${GEO_API_KEY}&location=${city},${state}`;

        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if(data && data.info.statuscode === 0) {
                        const { lat, lng } = data.results[0].locations[0].latLng;
                        resolve({
                            latitude: lat,
                            longitude: lng
                        });
                    }
                    else {
                        const msg = data.info.messages.length ? 
                            data.info.messages[0] :
                            "Unable to retrieve current location";
                        reject("ERROR: " + msg);
                    }
                })
                .catch(e => {
                    console.log(`Error: ${e.message}, Reason: ${e.reason}`);
                });
        });
    }
}

export default GeolocationService;
