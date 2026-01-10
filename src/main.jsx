import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { createRoot } from "react-dom/client";
import { ValidationProvider } from "./context/validationContext.jsx";
import { loadGoogleMapsScript } from "./utils/googleMapsLoader";
// import store from "../store.js";
// import { Provider } from "react-redux";

// Load Google Maps API before rendering the app
loadGoogleMapsScript()
  .then(() => {
    console.log("Google Maps API loaded successfully");
  })
  .catch((error) => {
    console.error("Failed to load Google Maps API:", error);
  });

createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
    <ValidationProvider>
    <App />
    </ValidationProvider>
  // </Provider>
);
