import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { createRoot } from "react-dom/client";
import { ValidationProvider } from "./context/validationContext.jsx";
// import store from "../store.js";
// import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
    <ValidationProvider>
    <App />
    </ValidationProvider>
  // </Provider>
);
