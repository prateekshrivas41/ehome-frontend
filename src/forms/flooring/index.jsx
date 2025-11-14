/* eslint-disable react/prop-types */
import "./flooringCss.css";
import React, { useContext, useState } from "react";
import MainFormView from "../index";
import StepCounter from "../../components/stepsCounter";
import PrevNextButtom from "../../components/prevNext";
import FormTabs from "../../components/FromTabs/FormTabs";
// import { step1data, step2data, step3Data } from "./stepsData";
import { step1data, step2data, step3Data, step4Data } from "./stepData";
import { TextField } from "@mui/material";
import Autocomplete from "react-google-autocomplete";
import StepLogo from "../../components/stepLogo";
import Checkbox from "@mui/material/Checkbox";
import DialogComponent from "../../components/dialog";
import { Link, useNavigate } from "react-router-dom";
import { postData } from "../../service/ApiService";
import { getLocalData, normalizeUserAgent } from "../../service/LocalData";
import { useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { useValidation } from "../../context/validationContext";
import useRecaptcha from "../../hooks/useRecaptcha";

const Step1 = ({
  selectFlooringPurpose,
  setselectFlooringPurpose,
  autoNext,
}) => {
  return (
    <div>
      <div className="step1-heading">
        Do you want your roof repaired or replaced?
      </div>
      <div className="step1-options-container">
        {step1data.map((item) => {
          return (
            <div
              onClick={() => {
                setselectFlooringPurpose(item);
                if (autoNext) autoNext();
              }}
              key={item.id}
              className={
                selectFlooringPurpose.id === item.id
                  ? "floor-step1-selected-container"
                  : "floor-step1-container"
              }
            >
              <img src={item.img} width={50} height={50} />
              <div
                className={
                  selectFlooringPurpose.id === item.id
                    ? "floor-step1-selected-options-text"
                    : "floor-step1-options-text"
                }
              >
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Step2 = ({ materialtype, setmaterialtype, autoNext }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {/* Question Section */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: "18px",
          color: "#333",
          marginTop: "10px", // Adds space between question and options
        }}
      >
        <div className="step1-heading">
          Which type of flooring material are you looking for?
        </div>
      </div>

      {/* Material Options Section */}
      {step3Data.map((item, index) => {
        return (
          <div
            className="step2_imag_div"
            key={item.id}
            onClick={() => {
              setmaterialtype(item);
              if (autoNext) {
                autoNext();
              }
            }}
            style={{
              width: "25%", // Set width to 30% for 3 images per row
              height: "110px", // Adjusted height to be closer to image size
              display: "flex",
              flexDirection: "column", // Stack image and text vertically
              justifyContent: "center",
              alignItems: "center", // Center content horizontally
              cursor: "pointer",
              padding: "5px",
              boxSizing: "border-box", // Prevent padding from affecting the width/height
              border:
                materialtype.id === item.id
                  ? "2px solid #25aa3d"
                  : "1px solid #ddd",
              marginTop: "10px", // Added top margin for some space above
            }}
          >
            <img
              src={item.img}
              alt={item.text}
              style={{
                width: "100%", // Image width fills container
                height: "auto", // Adjust height to maintain aspect ratio
                maxHeight: "70px", // Optional: limit the image height to fit better
                objectFit: "contain", // Ensure image fits within container
              }}
            />
            <div
              className="step2_img_text"
              style={{
                textAlign: "center",
                fontSize: "14px",
                color: "#333",
                marginTop: "5px",
              }}
            >
              {item.text}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Step3 = ({ laborMaterial, setlaborMaterial, autoNext }) => {
  return (
    <div>
      <div className="step1-heading">
        Which option best describes your flooring project needs?
      </div>
      <div className="step2-options-container">
        {step2data.map((item, index) => {
          return (
            <div
              onClick={() => {
                setlaborMaterial(item);
                if (autoNext) {
                  autoNext();
                }
              }}
              key={item.id}
              className={
                laborMaterial?.id === item.id
                  ? "step2-selected-container"
                  : "step2-container"
              }
            >
              <div
                className={
                  laborMaterial?.id === item.id
                    ? "alphabet-selected-text"
                    : "alphabet-text"
                }
              >
                {String.fromCharCode(index + 65)}
              </div>
              <div className="step2-options-text">{item.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Step4 = ({ surfaceArea, setSurfaceArea , autoNext}) => {
  return (
    <div>
      <div className="step1-heading" >
      Approximately how large is the surface to install new flooring in square feet?
        {/* <div style={{ fontSize: 14, fontWeight: 400 }}>
          Help us assess your financial credibility
          </div> */}
      </div>
      <div className="step2-options-container">
        {step4Data.map((item, index) => {
          return (
            <div
              onClick={() => {
                setSurfaceArea(item);
                if (autoNext) {
                  autoNext();
                }
              }}
              key={item.id}
              className={
                surfaceArea.id === item.id
                  ? "floor-step2-selected-container"
                  : "floor-step2-container"
              }
            >
              <div
                className={
                  surfaceArea.id === item.id
                    ? "alphabet-selected-text"
                    : "alphabet-text"
                }
              >
                {String.fromCharCode(index + 65)}
              </div>
              <div className="step2-options-text">{item.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Step5 = ({
  stateCity,
  setStateCity,
  ownerToRoofinChanges,
  setownerToRoofinChanges,
  setNewCity,
  newCity,
  newState,
  setNewState,
}) => {
  return (
    <div>
      <div className="step1-heading">Where will this project take place?</div>
      <div className="step4-options-container">
        <Autocomplete
          apiKey={"AIzaSyCpe8T2-LTEaHWGZlPa0-uxoVUcQTQzltY"}
          onPlaceSelected={(place) => {
            setStateCity(place?.formatted_address);
          }}
          options={{
            types: ["geocode"],
            componentRestrictions: { country: "us" },
          }}
          placeholder="Enter an address"
          className="autoComplete-style"
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Checkbox
            {...label}
            value={ownerToRoofinChanges}
            onChange={(val) => setownerToRoofinChanges(val)}
            defaultChecked
            size="small"
            sx={{
              color: "transparent",
              "&.Mui-checked": {
                color: "#25aa3d",
              },
            }}
          />
          <div className="autoComplete-text-style">
            I'm this property owner or entitled to make changes to it
          </div>
        </div>
        {/* <TextField
          name="city"
          placeholder="City"
          value={newCity}
          onChange={(text) => setNewCity(text.target.value)
          }
          margin="dense"
          variant="outlined"
          size="small"
          style={{ width: "100%" }}
          sx={{
            // Root class for the input field
            "& .MuiOutlinedInput-root": {
              color: "#000",
              fontFamily: "Poppins",
              fontSize: placeholderFontSize,
              // Class for the border around the input field
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#CCCCCC",
                borderWidth: "1px",
                borderRadius: 3,
              },
            },
            // Class for the label of the input field
            "& .MuiInputLabel-outlined": {
              color: "#2e2e2e",
              fontWeight: "medium",
            },
          }}
        /> */}
        {/* <TextField
          name="state"
          placeholder="State"
          value={newState}
          onChange={(text) => setNewState(text.target.value)
          }
          margin="dense"
          variant="outlined"
          size="small"
          style={{ width: "100%" }}
          sx={{
            // Root class for the input field
            "& .MuiOutlinedInput-root": {
              color: "#000",
              fontFamily: "Poppins",
              fontSize: placeholderFontSize,
              // Class for the border around the input field
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#CCCCCC",
                borderWidth: "1px",
                borderRadius: 3,
              },
            },
            // Class for the label of the input field
            "& .MuiInputLabel-outlined": {
              color: "#2e2e2e",
              fontWeight: "medium",
            },
          }}
        /> */}
      </div>
    </div>
  );
};

const placeholderFontSize = 14;
const Step6 = ({ userName, setUserName }) => {
  return (
    <div>
      <div className="step1-heading">Mention your first and last name</div>
      <div style={{ marginTop: 10 }} />
      <div className="step5-options-container">
        <TextField
          placeholder="First name"
          value={userName.firstName}
          onChange={(text) =>
            setUserName((prevState) => ({
              ...prevState,
              firstName: text.target.value,
            }))
          }
          margin="dense"
          variant="outlined"
          size="small"
          style={{ width: "90%" }}
          sx={{
            // Root class for the input field
            "& .MuiOutlinedInput-root": {
              color: "#000",
              fontFamily: "Poppins",
              fontSize: placeholderFontSize,
              // Class for the border around the input field
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#CCCCCC",
                borderWidth: "1px",
                borderRadius: 3,
              },
            },
            // Class for the label of the input field
            "& .MuiInputLabel-outlined": {
              color: "#2e2e2e",
              fontWeight: "medium",
            },
          }}
        />
        <TextField
          placeholder="Last name"
          value={userName.lastName}
          onChange={(text) =>
            setUserName((prevState) => ({
              ...prevState,
              lastName: text.target.value,
            }))
          }
          margin="dense"
          variant="outlined"
          size="small"
          style={{ width: "90%" }}
          sx={{
            // Root class for the input field
            "& .MuiOutlinedInput-root": {
              color: "#000",
              fontFamily: "Poppins",
              fontSize: placeholderFontSize,
              // Class for the border around the input field
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#CCCCCC",
                borderWidth: "1px",
                borderRadius: 3,
              },
            },
            // Class for the label of the input field
            "& .MuiInputLabel-outlined": {
              color: "#2e2e2e",
              fontWeight: "medium",
            },
          }}
        />
      </div>
    </div>
  );
};

const Step7 = ({ email, setEmail }) => {
  return (
    <div>
      <div style={{ marginTop: 10 }} />
      <div className="step1-heading">Enter your email</div>
      <div className="step2-options-container">
        <TextField
          placeholder="Email"
          value={email}
          onChange={(val) => setEmail(val.target.value)}
          margin="dense"
          variant="outlined"
          size="small"
          style={{ width: "90%" }}
          sx={{
            // Root class for the input field
            "& .MuiOutlinedInput-root": {
              color: "#000",
              fontFamily: "Poppins",
              fontSize: placeholderFontSize,
              // Class for the border around the input field
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#CCCCCC",
                borderWidth: "1px",
                borderRadius: 3,
              },
            },
            // Class for the label of the input field
            "& .MuiInputLabel-outlined": {
              color: "#2e2e2e",
              fontWeight: "medium",
            },
          }}
        />
      </div>
    </div>
  );
};

const Step8 = ({ phone, setPhone }) => {
  const [open, setOpen] = useState(false);
  return (
   <div>
      <div className="step1-heading" style={{ marginTop: 20 }}>
        Enter your phone number
      </div>
      <div style={{ marginTop: 10 }} />
      <div className="step4-options-container">
        <TextField
          placeholder="Phone"
          value={phone}
          onChange={(val) => setPhone(val.target.value)}
          margin="dense"
          variant="outlined"
          size="small"
          inputProps={{
            maxLength: 10, // Restrict input to 10 characters
          }}
          style={{ width: "80%" }}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#000",
              fontFamily: "Poppins",
              fontSize: placeholderFontSize,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#CCCCCC",
                borderWidth: "1px",
                borderRadius: 3,
              },
            },
            // Class for the label of the input field
            "& .MuiInputLabel-outlined": {
              color: "#2e2e2e",
              fontWeight: "medium",
            },
          }}
        />
        <DialogComponent open={open} setOpen={setOpen} />
        <div className="phone-description-text">
        By Clicking "Submit" , you agree to authorize our partners to call you (Including through automated means, eg: autodialing, text, and pre recorded messaging) via telephone,mobile device (including sms/mms) , and email at the number you entered above with offers about the products and services even if your contacts are registered in the national or state's "Do Not Call" lists, You agree to our{" "}
          <span className="text-underline" onClick={() => setOpen(true)}>
            {" "}
            Terms of Use{" "}
          </span>{" "}
          &{" "}
          <span className="text-underline" onClick={() => setOpen(true)}>
            Privacy Policy
          </span>
          . Also, your consent is not a purchase condition. I grant conscent to following Home Improvement firms and {" "}
          <a
            href="https://docs.google.com/document/d/11NE7uvfRInKor1XaiekOfIMks83BGvROJ0FBHN5BnWA/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span className="text-underline">partner companies</span>{" "}
          </a>{" "}
          to contact me:
          <br />
          {/* <Checkbox
            {...label}
            defaultChecked
            size="small"
            sx={{
              color: "transparent",
              "&.Mui-checked": {
                color: "#25aa3d",
              },
            }}
          />
          Momentum solar */}
        </div>
      </div>
    </div>
  );
};

const Step9 = ({ setOtp, otp }) => {
  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState("");
  const [valueThree, setValueThree] = useState("");
  const [valueFour, setValueFour] = useState("");
  const [valueFive, setValueFive] = useState("");
  const [valueSix, setValueSix] = useState("");

  const inputsRef = [
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ];
  const handleChange = (index) => (event) => {
    const value = event.target.value;
    // Check if the input is a single character or matches your regex
    if (value.length === 1 || re.test(value)) {
      switch (index) {
        case 0:
          setValueOne(value);
          break;
        case 1:
          setValueTwo(value);
          break;
        case 2:
          setValueThree(value);
          break;
        case 3:
          setValueFour(value);
          break;
        case 4:
          setValueFive(value);
          break;
        case 5:
          setValueSix(value);
          break;
        default:
          break;
      }
      // Move focus to the next input
      if (index < inputsRef.length - 1) {
        inputsRef[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (index) => (event) => {
    if (event.key === "Backspace" && event.target.value === "") {
      if (index > 0) {
        // Move focus to the previous input
        inputsRef[index - 1].current.focus();
      }
    }
  };

  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds countdown
  const [isDisabled, setIsDisabled] = useState(true); // Disable button initially

  React.useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      setIsDisabled(false);
    }
    return () => clearInterval(timer); // unmount
  }, [timeLeft]);

  const handleResend = () => {
    setTimeLeft(30); // Reset countdown to 30 seconds
    setIsDisabled(true); // Disable button again
    // Logic to resend OTP goes here, for example, an API call
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="step1-heading" style={{ marginTop: 20 }}>
        Enter phone number Otp here
      </div>
      <div style={{ marginTop: 10 }} />
      <div className="step8-options-container">
        {inputsRef.map((ref, index) => (
          <TextField
            key={index}
            margin="dense"
            variant="outlined"
            size="small"
            inputRef={ref}
            onChange={handleChange(index)}
            onKeyDown={handleKeyDown(index)}
            style={{ width: "10%", marginLeft: index > 0 ? 10 : 0 }}
            inputProps={{ maxLength: 1 }}
            sx={{
              "& .MuiInputBase-input": {
                textAlign: "center",
                height: "40px",
                padding: "1px",
                fontFamily: "Poppins",
              },
              "& .MuiOutlinedInput-root": {
                color: "#000",
                fontFamily: "Poppins",
                fontSize: 16, // Use a placeholder font size variable if needed
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#CCCCCC",
                  borderWidth: "1px",
                  borderRadius: 3,
                },
              },
              "& .MuiInputLabel-outlined": {
                color: "#2e2e2e",
                fontWeight: "medium",
              },
            }}
          />
        ))}
      </div>
      {!isDisabled ? (
        <div
          onClick={handleResend}
          disabled={isDisabled}
          className="resend-otp-text"
        >
          Resend OTP
        </div>
      ) : (
        <div className="resend-text">
          Time {`00:${timeLeft > 9 ? timeLeft : `0${timeLeft}`}`} seconds{" "}
        </div>
      )}
    </div>
  );
};

export default function WarrantyForm({ source, certUrlField, jornayaId, ip }) {
  const { validationError, setValidationError } = useValidation();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectFlooringPurpose, setselectFlooringPurpose] = useState("");
  const [laborMaterial, setlaborMaterial] = useState("");
  const [materialtype, setmaterialtype] = useState("");
  const [ownerToRoofinChanges, setownerToRoofinChanges] = useState(true);
  const [stateCity, setStateCity] = useState("");
  const [userName, setUserName] = useState({ firstName: "", lastName: "" });
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newState, setNewState] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [surfaceArea, setSurfaceArea] = useState("");
  const { isVerified, isLoading, captchaError, verifyRecaptcha } =
    useRecaptcha();
  const autoNext = () => {
  setTimeout(() => {
    if (currentStep < 4) setCurrentStep((prev) => prev + 1);
    }, 100); // slight delay for UI feedback
  };
  const steps = [
    <div key="1">
      <Step1
        selectFlooringPurpose={selectFlooringPurpose}
        setselectFlooringPurpose={setselectFlooringPurpose}
        autoNext={currentStep === 0 ? () => { setValidationError(""); autoNext(); } : undefined}
      />
    </div>,
    <div key="2">
      <Step2 materialtype={materialtype} setmaterialtype={setmaterialtype} 
      autoNext={currentStep === 1 ? () => { setValidationError(""); autoNext(); } : undefined}/>
    </div>,
    <div key="3">
      <Step3
        laborMaterial={laborMaterial}
        setlaborMaterial={setlaborMaterial}
        autoNext={currentStep === 2 ? () => { setValidationError(""); autoNext(); } : undefined}
      />
    </div>,
    <div key="4">
      <Step4
        surfaceArea={surfaceArea}
        setSurfaceArea={setSurfaceArea}
        autoNext={currentStep === 3 ? () => { setValidationError(""); autoNext(); } : undefined}
      />
    </div>,
    <div key="5">
      <Step5
        stateCity={stateCity}
        setStateCity={setStateCity}
        ownerToRoofinChanges={ownerToRoofinChanges}
        setownerToRoofinChanges={setownerToRoofinChanges}
        setNewCity={setNewCity}
        newCity={newCity}
        setNewState={setNewState}
        newState={newState}
      />
    </div>,
    <div key="6">
      <Step6 userName={userName} setUserName={setUserName} />
      <Step7 email={email} setEmail={setEmail} />
    </div>,
    <div key="7">
      <Step8 phone={phone} setPhone={setPhone} />
    </div>,
    <div key="8">
      <Step8 otp={otp} setOtp={setOtp} />
    </div>,
  ];
  useEffect(() => {
    const fetchCityState = async () => {
      try {
        const zipcode = getLocalData("zipcode"); // Ensure getLocalData is correctly defined

        const response = await axios.get(
          `https://api.zippopotam.us/us/${zipcode}`
        );
        const places = response?.data?.places;

        setCity(places[0]["place name"]);
        setState(places[0]["state abbreviation"]);
      } catch (error) {
        console.error("Error fetching city and state:", error);
      }
    };

    fetchCityState();
  }, []);
  const handleVerify = async () => {
    const verified = await verifyRecaptcha("submit");
    return verified;
  };
  const nextStep = async () => {
    if (currentStep < steps.length - 2) {
      if (currentStep == 0) {
        if (selectFlooringPurpose == "") {
          setValidationError("Please select flooring purpose!");
        } else {
          setValidationError(""); // Clear the error message
          setCurrentStep(currentStep + 1);
        }
        return;
      } else if (currentStep == 1) {
        if (materialtype == "") {
          setValidationError("Please select material type!");
        } else {
          setValidationError(""); // Clear the error message
          setCurrentStep(currentStep + 1);
        }
        return;
      } else if (currentStep == 2) {
        if (laborMaterial == "") {
          setValidationError("Please select material type!");
        } else {
          setValidationError(""); // Clear the error message
          setCurrentStep(currentStep + 1);
        }
        return;
      } else if (currentStep == 3) {
        if (surfaceArea == "") {
          setValidationError("Please select surface area!");
        } else {
          setValidationError(""); // Clear the error message
          setCurrentStep(currentStep + 1);
        }
        return;
      } else if (currentStep == 4) {
        if (stateCity === "") {
          setValidationError("Please select state and city!");
        } else {
          setValidationError(""); // Clear the error message
          setCurrentStep(currentStep + 1);
        }
      } else if (currentStep == 5) {
        if (!userName.firstName && !userName.lastName) {
          setValidationError("Please enter both first name and last name!");
        } else if (!userName.firstName) {
          setValidationError("Please enter the first name!");
        } else if (!userName.lastName) {
          setValidationError("Please enter the last name!");
        } else if (email === "") {
          setValidationError("Please enter email!");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          setValidationError("Please enter a valid email address!");
        } else {
          setValidationError("");
          setCurrentStep(currentStep + 1);
        }
        return;
      } else if (currentStep == 6) {
        if (phone == "") {
          setValidationError("please enter phone number!");
        } else {
          setValidationError(""); // Clear the error message
          setCurrentStep(currentStep + 1);
        }
      }
    } else {
      if (phone == "") {
        setValidationError("Please enter a phone number!");
        return;
      } else if (!/^\d{10}$/.test(phone)) {
        setValidationError("Please enter a valid 10-digit phone number!");
        return;
      }
      if (!certUrlField || !jornayaId || !ip) {
        console.warn("Tracking data missing. Skipping submission.", {
          certUrlField,
          jornayaId,
          ip,
        });
        return;
      }
      const isHuman = await handleVerify();
      console.log(isHuman);
      if (!isHuman) {
        setValidationError(captchaError);
        return;
      }
      setIsSubmitting(true);
      let zipcode = getLocalData("zipcode");
      let newState = stateCity.split(",");
      const location = newState[2].split();
      const splitLocation = location[0].split(" ");

      let body = {
        zip: zipcode,
        email: email,
        phoneNumber: phone,
        state: state ? state : splitLocation[1],
        city: city ? city : newState[1],
        address: stateCity,
        firstName: userName?.firstName,
        lastName: userName?.lastName,
        project: selectFlooringPurpose?.value,
        projectNeeds: laborMaterial?.value,
        material: materialtype?.value,
        credit: surfaceArea.text,
        source: source,
        trustedFormUrl: certUrlField,
        jornayaLeadId: jornayaId,
        userAgent: normalizeUserAgent(window?.navigator?.userAgent),
        ip: ip,
      };
      console.log("floor data:", body);
      postData("flooring", body)
        .then((res) => {
          if (res?.success) {
            setIsSubmitting(false);
            navigate("/flooring-thankyou-page", {
              state: res?.data,
            });
          }
        })
        .catch((error) => console.log("flooring Post API Error", error));
    }
  };
  const prevStep = () => {
    setValidationError("");
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const stepLabels = [
    { label: "Purpose" },
    { label: "Material" },
    { label: "Needs" },
    { label: "Surface Area" },
    { label: "Property" },
    { label: "Contact" },
    { label: "Verification" },
  ];
  return (
    <MainFormView>
      {/* <ValidationProvider> */}
      <div className="main-container">
        <div className="roofing-form-container">
          <div style={{ width: "100%" }}>
            <FormTabs
              steps={stepLabels}
              activeStep={currentStep + 1} // Home is always 0, steps start at 1
              orientation="horizontal"
              isTabEnabled={(idx) => idx === 0 || idx <= currentStep + 1}
              onTabClick={(idx) => {
                if (idx === 0) {
                  navigate("/");
                } else if (idx <= currentStep + 1) {
                  setCurrentStep(idx - 1);
                }
              }}
            />
          </div>
          {isSubmitting && (
            <div className="overlay-loader">
              <CircularProgress size={60} color="primary" />
            </div>
          )}
          <StepCounter count={currentStep} step={15.6} />{" "}
          {/* 13.4 for OTP loading view */}
          <div className="transition-wrapper">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`component ${
                  index === currentStep
                    ? "slide-in"
                    : currentStep > index
                    ? "slide-out-left"
                    : "slide-out-right"
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          {currentStep !== 6 && <StepLogo />}{" "}
          {/* Avoid rendering StepLogo at step 6 */}
          <div style={{ marginBottom: 20 }} />
          {/* The validation error will appear if present */}
          {validationError && (
            <div
              className="error_div"
              style={{ color: "red", textAlign: "center" }}
            >
              {validationError}
            </div>
          )}
          <PrevNextButtom
            nextText={
              isLoading 
                ? "Verifying..." 
                : currentStep === steps.length - 1 
                  ? "Submit" 
                  : "Next"
            }
            prevClick={prevStep}
            nextClick={nextStep}
            backDisable={currentStep === 0 || isSubmitting}
            nextDisable={isLoading || isSubmitting}
          />
          <div style={{ marginBottom: 10 }} />
        </div>
      </div>
      {/* </ValidationProvider> */}
    </MainFormView>
  );
}
