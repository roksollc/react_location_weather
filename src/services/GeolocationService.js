// API Key - Change to your API_KEY
const API_KEY = "MAPQUEST_API_KEY";

// base URL to MapQuest API
const BASE_URL = 'http://www.mapquestapi.com/geocoding/v1/address';

// `GeolocationService` CLASS
class GeolocationService {
    getCurrentPosition(city, state) {
        const url = `${BASE_URL}?key=${API_KEY}`;
        const location = city + "," + state;
        const loc = { location: location };

        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'post',
                body: JSON.stringify(loc)
            })
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
                reject(e)
            });
        });
    }
}

export default GeolocationService;
