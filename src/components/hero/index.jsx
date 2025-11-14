import { useMemo, useState } from "react";
import "./hero.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Google_logo from "../../assets/Google-white.png";
import A_rating from "../../assets/A-rating.png";
import { Header } from "../header";
import { Trusted } from "../Trusted";
import TextFieldZip from "../TextFieldZip";
import { colors } from "../../constants/Colors";
import { useNavigate } from "react-router-dom";
import { setLocalData } from "../../service/LocalData";

const HeroSection = ({ city, state, country, heading, subHeading ,setOpen ,backImg}) => {
  const [zipCode, setzipCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const zipCodeRegex = /^\d{5}$/;
  const handleChange = (e) => {
    setzipCode(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (zipCodeRegex.test(zipCode)) {
      setError("");
       setOpen(true)
      //  navigate("/windowsForm");
    } else {
      setError("Invalid ZIP Code. Please enter a 5-digit number.");
    }
  };
 
  useMemo(() => {
    setLocalData('zipcode', zipCode)
  }, [zipCode])
  return (
    <>
      <section 
       id={heading === 'window' ? "windowSection" : 
        heading === 'gutter' ? "gutterSection" : 
        heading === 'bathroom' ? "bathroomSection" : 
              heading === 'Solar' ? "solarSection" : 
                heading === 'homeWarranty' ? "homeWarrantySection" : 
                heading === 'Flooring' ? "flooringSection" : 
        "homeSection"}>
        <Header />
        <div className="hero-content">
          <div id="content">
            <h2 id="main-h">
               {heading == "home" ? " Best " : "Connecting you with "} <span style={{ color: 'yellow' }} >{subHeading}</span> {city == '' ? null : "in"}  {city} {state} {country}
              <br /> is just a click away
            </h2>
          </div>
          <div id="form-manager">
            <form id="form-1" onSubmit={handleSubmit}>
              <TextFieldZip zipCode={zipCode} handleChange={handleChange} />
              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{
                  height: 40,
                  fontFamily: 'Poppins',
                  textTransform: 'capitalize'
                }}
                style={{ backgroundColor: colors.primaryGreen }}
                defaultValue="Normal"
                id="main-btn"
              >
                Get Estimate
              </Button>
            </form>
            <div id="logos">
              <img src={Google_logo} width={90} height={45} />
              <img src={A_rating} width={65} />
            </div>
          </div>
        </div>
        <Trusted />
      </section>
    </>
  );
};

export { HeroSection };
