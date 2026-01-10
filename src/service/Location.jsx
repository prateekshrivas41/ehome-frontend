import axios from "axios";
import { GOOGLE_MAPS_API_KEY } from "../constants/GoogleMaps";

const getCityStateCountry = async (lat, long) => {
    const API_KEY = GOOGLE_MAPS_API_KEY;
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
    const location = window.navigator && window.navigator.geolocation;
    const safeCallback = (data) => callback?.(data || { city: "", state: "", country: "" });

    if (location) {
        location.getCurrentPosition(
            (position) => {
                getCityStateCountry(position.coords.latitude, position.coords.longitude)
                    .then((res) => {
                        safeCallback(res);
                    })
                    .catch((error) => {
                        console.error("Error fetching city/state:", error);
                        safeCallback();
                    });
            },
            (error) => {
                console.log("Error >>> location::::", error);
                safeCallback();
            }
        );
    } else {
        // Geolocation unavailable; provide empty defaults so consumers don't break
        safeCallback();
    }
}

export { getMyLocation }