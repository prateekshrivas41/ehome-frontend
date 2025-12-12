import { GOOGLE_MAPS_API_KEY } from "../constants/GoogleMaps";

/**
 * Dynamically loads Google Maps API script
 * This ensures we use the centralized API key
 */
export function loadGoogleMapsScript() {
  // Check if script is already loaded
  if (window.google && window.google.maps) {
    return Promise.resolve();
  }

  // Check if script tag already exists
  const existingScript = document.querySelector(
    'script[src*="maps.googleapis.com/maps/api/js"]'
  );
  if (existingScript) {
    return new Promise((resolve) => {
      if (window.google && window.google.maps) {
        resolve();
      } else {
        existingScript.onload = resolve;
      }
    });
  }

  return new Promise((resolve, reject) => {
    // Set up callback
    window.initGoogleMaps = function () {
      window.googleMapsLoaded = true;
      if (window.onGoogleMapsLoaded) {
        window.onGoogleMapsLoaded();
      }
      resolve();
    };

    // Create and inject script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&callback=initGoogleMaps`;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      reject(new Error("Failed to load Google Maps API"));
    };
    document.head.appendChild(script);
  });
}

