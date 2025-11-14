import axios from "axios";

const getCityStateCountry = async (lat, long) => {
    const API_KEY = 'AIzaSyCpe8T2-LTEaHWGZlPa0-uxoVUcQTQzltY';
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${API_KEY}`;
    try {
        const response = await axios.get(url);
        const results = response.data.results;
        if (results.length > 0) {
            const addressComponents = results[0].address_components;
            let city = '';
            let state = '';
            let country = '';
            addressComponents.forEach((component) => {
                if (component.types.includes('locality')) {
                    city = component.long_name;
                }
                if (component.types.includes('administrative_area_level_1')) {
                    state = component.long_name;
                }
                if (component.types.includes('country')) {
                    country = component.long_name;
                }
            });
            return ({ city, state, country });
        }
    } catch (error) {
        console.error('Error fetching location details:', error);
    }
};

function getMyLocation(callback) {
    const location = window.navigator && window.navigator.geolocation
    if (location) {
        location.getCurrentPosition((position) => {
            getCityStateCountry(position.coords.latitude, position.coords.longitude).then(res => {
                callback(res)
            })
        }, (error) => {
            console.log("Error >>> location::::", error)
        })
    }
}

export { getMyLocation }