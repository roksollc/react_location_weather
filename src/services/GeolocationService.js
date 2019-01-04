// import axios from 'axios';

const API_KEY = "qs6ZLVKFSF1SVbAYmUcbdsXjZf8hZRnt";
const BASE_URL = 'http://www.mapquestapi.com/geocoding/v1/address';

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
        // console.log("RESPONSE");
        // console.log(data);
                if(data && data.info.statuscode === 0) {
                    // NOTE: Only taking the first...TODO?
                    // TODO! Check for empty?
                    const { lat, lng } = data.results[0].locations[0].latLng;
        // console.log("POSITION");
        // console.log(lat + ", " + lng);        
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

export { GeolocationService };