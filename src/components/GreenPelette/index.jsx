import Button from "@mui/material/Button";
import "./GreenPelette.css";
import TextFieldZip from "../TextFieldZip";
import { useMemo, useState } from "react";
import { setLocalData } from "../../service/LocalData";
const GreenPallete = ({ heading, setOpen }) => {
  const [zipCode, setzipCode] = useState("");
  const [error, setError] = useState("");
  const zipCodeRegex = /^\d{5}$/;
  const handleChange = (e) => {
    setzipCode(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (zipCodeRegex.test(zipCode)) {
      setError("");
      setOpen(true);
      //  navigate("/windowsForm");
    } else {
      setError("Invalid ZIP Code. Please enter a 5-digit number.");
    }
  };
  useMemo(() => {
    setLocalData("zipcode", zipCode);
  }, [zipCode]);
  return (
    <div className="green-p">
      <div className="white-text">Ready For Your Project Estimate?</div>
      <div className="button-Manager">
        <form id="form-1" onSubmit={handleSubmit}>
          <TextFieldZip
            fs={"14px"}
            fieldHeight={"35px"}
            zipCode={zipCode}
            handleChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#5352C9",
              fontFamily: "Poppins",
              fontSize: "14px",
              textTransform: "capitalize",
            }}
            id="main-btn"
          >
            Find Experts
          </Button>
        </form>
      </div>
    </div>
  );
};

export default GreenPallete;
