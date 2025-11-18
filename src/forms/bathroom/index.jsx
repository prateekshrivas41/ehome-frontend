import "./bathroomFormCss.css";
import React, { useState, useEffect, useRef } from "react";
import MainFormView from "../index";
import StepCounter from "../../components/stepsCounter";
import PrevNextButtom from "../../components/prevNext";
import { step1data, step2data, step4data } from "./stepData";
import FormTabs from "../../components/FromTabs/FormTabs";
import { TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import Autocomplete from "react-google-autocomplete";
import StepLogo from "../../components/stepLogo";
import Checkbox from "@mui/material/Checkbox";
import DialogComponent from "../../components/dialog";
import { useNavigate } from "react-router-dom";
import { postData } from "../../service/ApiService";
import { getLocalData, normalizeUserAgent } from "../../service/LocalData";
import { CircularProgress } from "@mui/material";

import { useValidation } from "../../context/validationContext";
import useRecaptcha from "../../hooks/useRecaptcha";

const ownerData = [
    { id: 1, text: 'Yes', value: true },
    { id: 2, text: 'No', value: false }
];

const Step1 = ({
  stateCity,
  setStateCity,
  ownerToBathroomChanges,
  setOwnerToBathroomChanges,
  setNewCity,
  setNewState,
}) => {
  const getCityAndState = (place) => {
    if (!place?.address_components) return { city: "", state: "" };

    let city = "";
    let state = "";

    place.address_components.forEach((component) => {
      if (component.types.includes("locality")) {
        city = component.long_name;
      } else if (
        !city &&
        component.types.includes("administrative_area_level_3")
      ) {
        // fallback for when 'locality' is missing
        city = component.long_name;
      } else if (component.types.includes("administrative_area_level_1")) {
        state = component.short_name;
      }
    });

    return { city, state };
  };
  return (
    <div>
      <div className="bath-step1-heading">Where will this project take place?</div>
      <div className="step4-options-container">
        <Autocomplete
          key={stateCity} // Add key to reset component on selection
          apiKey={"AIzaSyCpe8T2-LTEaHWGZlPa0-uxoVUcQTQzltY"}
          defaultValue={stateCity}
          onPlaceSelected={(place) => {
            setStateCity(place?.formatted_address);
            const { city, state } = getCityAndState(place);
            setNewCity(city);
            setNewState(state);
          }}
          options={{
            types: ["geocode"],
            componentRestrictions: { country: "us" },
          }}
          placeholder="Enter an address"
          className="autoComplete-style"
        />
        <div style={{marginTop: '20px'}}>
            <div>Are you the homeowner or authorized <br/>
            to make property changes?</div>
            <div className="step2-options-container">
                {ownerData.map((item) => {
                return (
                    <div
                    onClick={() => {
                        setOwnerToBathroomChanges(item);
                    }}
                    key={item.id}
                    className={
                        ownerToBathroomChanges?.id === item.id
                        ? "step2-selected-container"
                        : "step2-container"
                    }
                    >
                    <div
                        className="step2-options-text"
                    >
                        {item.text}
                    </div>
                    </div>
                );
                })}
            </div>
        </div>
      </div>
    </div>
  );
};

const Step2 = ({ bathroomType, setBathroomType, autoNext }) => {
    return (
      <div className="step2-4-container">
        <div className="step1-heading">What type of bathroom would you like to remodel?</div>
        <FormControl fullWidth margin="dense" variant="outlined">
          <InputLabel id="bathroom-type-label">Select Bathroom Type</InputLabel>
          <Select
            labelId="bathroom-type-label"
            id="bathroom-type-select"
            value={bathroomType}
            label="Select Bathroom Type"
            onChange={(e) => {
              setBathroomType(e.target.value);
              if (autoNext) autoNext();
            }}
            sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#CCCCCC",
                    borderWidth: "1px",
                    borderRadius: 3,
                },
            }}
          >
            {step2data.map((item) => (
              <MenuItem key={item.id} value={item.value}>{item.text}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  };

const Step3 = ({ selectBathroomPurpose, setselectBathroomPurpose, autoNext }) => {
  return (
    <div>
      <div className="step1-heading">
        What would you like to do with your shower or bathtub?
      </div>
      <div className="step1-options-container bath-container">
        {step1data.map((item) => {
          return (
            <div
              onClick={() => {
                setselectBathroomPurpose(item);
                if (autoNext) autoNext();
              }}
              key={item.id}
              className={
                selectBathroomPurpose.id === item.id
                  ? "bath-step1-selected-container"
                  : "bath-step1-container"
              }
            >
              <img src={item.image} className="bathroom-imgs" />
              <div
                className={
                  selectBathroomPurpose.id === item.id
                    ? "bath-step1-selected-options-text"
                    : "bath-step1-options-text"
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

const Step4 = ({ otherUpgrades, setOtherUpgrades, autoNext }) => {
    return (
      <div className="step2-4-container">
        <div className="step1-heading">Are there any other elements in your bathroom that you would like to upgrade?</div>
        <FormControl fullWidth margin="dense" variant="outlined">
          <InputLabel id="other-upgrades-label">Select Upgrades</InputLabel>
          <Select
            labelId="other-upgrades-label"
            id="other-upgrades-select"
            value={otherUpgrades}
            label="Select Upgrades"
            onChange={(e) => {
              setOtherUpgrades(e.target.value);
              if (autoNext) autoNext();
            }}
            sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#CCCCCC",
                    borderWidth: "1px",
                    borderRadius: 3,
                },
            }}
          >
            {step4data.map((item) => (
              <MenuItem key={item.id} value={item.value}>{item.text}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  };

const placeholderFontSize = 14;
const Step5 = ({ userName, setUserName, email, setEmail }) => {
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
        />
      <div className="step1-heading">
        Enter your email
      </div>
      <div className="step2-options-container"   style={{ width: "100%" }}>
        <TextField
          placeholder="Email"
          value={email}
          onChange={(val) => setEmail(val.target.value)}
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
        />
      </div>
      </div>
    </div>
  );
};

const Step6 = ({ phone, setPhone }) => {
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
          style={{ width: "50%" }}
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
          NetworX */}
        </div>
      </div>
    </div>
  );
};

const Step7 = ({ setOtp, otp }) => {
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
  const [selectBathroomPurpose, setselectBathroomPurpose] = useState("");
  const [ownerToBathroomChanges, setOwnerToBathroomChanges] = useState(true);
  const [stateCity, setStateCity] = useState("");
  const [userName, setUserName] = useState({ firstName: "", lastName: "" });
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bathroomType, setBathroomType] = useState("");
  const [otp, setOtp] = useState("");
  const [otherUpgrades, setOtherUpgrades] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newCity, setNewCity] = useState("");
  const [newState, setNewState] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
    const formRef = useRef(null);
    const prevNextRef = useRef(null);
    const { 
      isVerified, 
      isLoading, 
      captchaError, 
      verifyRecaptcha 
    } = useRecaptcha();
    const autoNext = () => {
      setTimeout(() => {
        if (currentStep < 5) setCurrentStep((prev) => prev + 1);
      }, 100); 
    };
    const stepLabels = [
      { label: "Property" },
      { label: "Purpose" },
      { label: "Upgrade" },
      { label: "Extras" },
      { label: "Contact" },
      { label: "Verification" }
    ];
  const steps = [
    <div key="1">
      <Step1
        stateCity={stateCity}
        setStateCity={setStateCity}
        ownerToBathroomChanges={ownerToBathroomChanges}
        setNewCity={setNewCity}
        setNewState={setNewState}
        setOwnerToBathroomChanges={setOwnerToBathroomChanges}
      />
    </div>,
    <div key="2">
        <Step2 bathroomType={bathroomType} setBathroomType={setBathroomType} autoNext={() => { setValidationError(""); autoNext(); }} />
    </div>,
    <div key="3">
      <Step3
        selectBathroomPurpose={selectBathroomPurpose}
        setselectBathroomPurpose={setselectBathroomPurpose}
        autoNext={() => { setValidationError(""); autoNext(); }}
      />  
    </div>,
    <div key="4">
        <Step4 otherUpgrades={otherUpgrades} setOtherUpgrades={setOtherUpgrades} autoNext={() => { setValidationError(""); autoNext(); }} />
    </div>,
    <div key="5">
      <Step5 userName={userName} setUserName={setUserName} email={email} setEmail={setEmail} />
    </div>,
    <div key="6">
      <Step6 phone={phone} setPhone={setPhone} />
    </div>,
  ];
  const handleVerify = async () => {
    const verified = await verifyRecaptcha('submit');
    return verified;
  };
  const nextStep = async() => {
      if (currentStep === 0) {
        if (stateCity === "") {
          setValidationError("Please enter state and city!");
        } else if (ownerToBathroomChanges === "") {
            setValidationError("Please answer the property owner question!");
        }
        else {
          setValidationError("");
          setCurrentStep(currentStep + 1);
        }
        return
      }
      if (currentStep === 1) {
        if (bathroomType === "") {
          setValidationError("Please select a bathroom type!");
        } else {
          setValidationError("");
          setCurrentStep(currentStep + 1);
        }
        return
      } 
      if (currentStep === 2) {
        if (selectBathroomPurpose === "") {
          setValidationError("Please select bathroom purpose!");
        } else {
          setValidationError("");
          setCurrentStep(currentStep + 1);
        }
        return
      } 
      if (currentStep === 3) {
        if (otherUpgrades === "") {
            setValidationError("Please select an upgrade option!");
          } else {
            setValidationError("");
            setCurrentStep(currentStep + 1);
          }
          return
      }
      if (currentStep === 4) {
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
      } 
      if (currentStep === 5) {
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
          if (!isHuman) {
            setValidationError(captchaError);
            return;
          }
          setIsSubmitting(true);

      let zipcode = getLocalData("zipcode");
      // let newState = stateCity.split(",");
      // const location = newState[2].split();
      // const splitLocation = location[0].split(" ");

      let body = {
        email: email,
        phoneNumber: phone,
        homeOwner: ownerToBathroomChanges.text,
        zip: zipcode,
        state: newState,
        city: newCity,
        address: stateCity,
        firstName: userName.firstName,
        lastName: userName.lastName,
        project: selectBathroomPurpose?.projectType,
        bathroomType: bathroomType,
        upgrades: otherUpgrades,
        source: source?.publisherId,
        clickid: source?.clickId,
        trustedFormUrl: certUrlField,
        trustedFormId: certUrlField?.split("/")[3],
        jornayaLeadId: jornayaId,
        userAgent: normalizeUserAgent(window?.navigator?.userAgent),
        ip: ip,
      };
      // console.log("Bathroom Form Body:", body);
      postData("bathroom", body)
        .then((res) => {
          setIsSubmitting(false);
          if (res.success) {
            navigate("/bathroom-thankyou-page");
          }
        })
        .catch((error) => console.log("bathroom Post API Error", error));
    }
  };
  const prevStep = () => {
    setValidationError("");
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <MainFormView>
      {/* <ValidationProvider> */}
      <div className="main-container">
      <div className="form-value-container" ref={formRef}>      
          <div style={{width:"100%"}}>
          <FormTabs
            steps={stepLabels}
            activeStep={currentStep + 1} // Home is always 0, steps start at 1
            orientation="horizontal"
            isTabEnabled={(idx) => idx === 0 || idx <= currentStep + 1}
            onTabClick={(idx) => {
              if (idx === 0) {
                navigate('/');
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
        <StepCounter
          count={currentStep}
          step={16.6}
        />
        <div className="transition-wrapper">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`component bath-component ${
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

      {currentStep !== steps.length - 1 && <StepLogo />}{" "}

        <div style={{ marginBottom: 20 }} />
        {validationError && (
            <div
              className="error_div"
              style={{ color: "red", textAlign: "center" }}
            >
              {validationError}
            </div>
          )}
          <PrevNextButtom
            ref={prevNextRef}
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
