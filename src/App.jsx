import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/homePage";
import Windows from "./pages/windows";
import Gutter from "./pages/gutter";
import HomeWarranty from "./pages/homeWarranty";
import Bathroom from "./pages/bathroom";
import WindowForm from "./forms/windows";
import RoofingForm from "./forms/roofing";
import WindowThankYouPage from "./components/thankyoupages/windowThankYouPage";
import Roofing from "./pages/roofing";
import RoofingThankYou from "./components/thankyoupages/roofingThankYouPage";
import SolarThankYouPage from "./components/thankyoupages/solarThankYouPage";
import BathroomThankyouCss from "./components/thankyoupages/bathroomThankYouPage";
import FlooringThankYouPage from "./components/thankyoupages/flooringThankYouPage";
import GutterThankYouPage from "./components/thankyoupages/gutterThankYouPage";
import HomeWarrantyThankYouPage from "./components/thankyoupages/homeWarrantyThankYouPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Solar from "./pages/solar";
import Flooring from "./pages/flooring";
import {FlooringScreen} from "./preLanders/FlooringScreen";
import {BathroomScreen} from "./preLanders/BathroomScreen";
import {GutterScreen} from "./preLanders/GutterScreen";
import {HomeWarrantyScreen} from "./preLanders/HomeWarrantyScreen";
import {RoofingScreen} from "./preLanders/RoofingScreen"
import {SolarScreen} from "./preLanders/SolarScreen"
import {WindowQuoteScreen} from "./preLanders/WindowQuoteScreen"
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/windows", element: <Windows /> },
  { path: "/gutter", element: <Gutter /> },
  { path: "/homeWarranty", element: <HomeWarranty /> },
  { path: "/bathroom", element: <Bathroom /> },
  { path: "/roofing", element: <Roofing /> },
  { path: "/roofingForm", element: <RoofingForm /> },
  { path: "/window-thankyou-page", element: <WindowThankYouPage /> },
  { path: "/roofingThankYou", element: <RoofingThankYou /> },
  { path: "/privacyPolicy", element: <PrivacyPolicy /> },
  { path: "/solar", element: <Solar /> },
  { path: "/flooring", element: <Flooring /> },
  { path: "/solar-thankyou-page", element: <SolarThankYouPage /> },
  { path: "/bathroom-thankyou-page", element: <BathroomThankyouCss /> },
  { path: "/flooring-thankyou-page", element: <FlooringThankYouPage /> },
  { path: "/gutter-thankyou-page", element: <GutterThankYouPage /> },
  {
    path: "/homeWarranty-thankyou-page",
    element: <HomeWarrantyThankYouPage />,
  },
  {path: "/floor", element: <FlooringScreen /> },
  {path:"/roofers", element: <RoofingScreen/>},
  {path:"/solarinstall", element: <SolarScreen/>},
  {path:"/window", element: <WindowQuoteScreen/>},
  {path:"/homewarranties", element: <HomeWarrantyScreen/>},
  {path:"/gutterrepair", element: <GutterScreen/>},
  {path:"/bath", element: <BathroomScreen/>},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
