import "./windowFormCss.css";
import React, { useContext, useState, useRef } from "react";
import MainFormView from "../index";
import StepCounter from "../../components/stepsCounter";
import PrevNextButtom from "../../components/prevNext";
import FormTabs from "../../components/FromTabs/FormTabs";
import { step1data, step2data, step3Data } from "./stepsData";
import { TextField } from "@mui/material";
import Autocomplete from "react-google-autocomplete";
import StepLogo from "../../components/stepLogo";
import Checkbox from "@mui/material/Checkbox";
import DialogComponent from "../../components/dialog";
import { useNavigate } from "react-router-dom";
import { postData } from "../../service/ApiService";
import { getLocalData, normalizeUserAgent } from "../../service/LocalData";
import { useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { useValidation } from "../../context/validationContext";

import useRecaptcha from "../../hooks/useRecaptcha";

const Step1 = ({ selectWindowPurpose, setSelectWindowPurpose,autoNext }) => {
  return (
    <div>
      <div className="wstep1-heading">What is your purpose?</div>
      <div className="step1-options-container">
        {step1data.map((item) => {
          return (
            <div
              onClick={() => {
                setSelectWindowPurpose(item);
                if (autoNext) autoNext();
              }}
              key={item.id}
              className={
                selectWindowPurpose.id === item.id
                  ? "window-step1-selected-container"
                  : "window-step1-container"
              }
            >
              <img src={item.image} width={50} height={50} />
              <div
                className={
                  selectWindowPurpose.id === item.id
                    ? "window-step1-selected-options-text"
                    : "window-step1-options-text"
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

const Step2 = ({ windowCounts, setWindowCounts,autoNext }) => {
  return (
    <div>
      <div className="step1-heading">
        How many windows do you need to work on?
      </div>
      <div className="step2-options-container">
        {step2data.map((item, index) => {
          return (
            <div
              onClick={() => {
                setWindowCounts(item);
                if (autoNext) autoNext();
              }}
              key={item.id}
              className={
                windowCounts?.id === item.id
                  ? "step2-selected-container"
                  : "step2-container"
              }
            >
              <div
                className={
                  windowCounts?.id === item.id
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

const Step3 = ({ creditRatings, setCreditRatings,autoNext }) => {
  return (
    <div>
      <div className="step1-heading">
        What's your credit rating?
        <br />
        <div style={{ fontSize: 14, fontWeight: 400 }}>
          Help us assess your financial credibility
        </div>
      </div>
      <div className="step2-options-container">
        {step3Data.map((item, index) => {
          return (
            <div
              onClick={() => {
                setCreditRatings(item);
                if (autoNext) autoNext();
              }}
              key={item.id}
              className={
                creditRatings.id === item.id
                  ? "step2-selected-container window-step2"
                  : "step2-container window-step2"
              }
            >
              <div
                className={
                  creditRatings.id === item.id
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

const Step4 = ({
  stateCity,
  setStateCity,
  ownerToWindowChanges,
  setOwnerToWindowChanges,
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
            value={ownerToWindowChanges}
            onChange={(val) => setOwnerToWindowChanges(val)}
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
      </div>
    </div>
  );
};

const placeholderFontSize = 14;
const Step5 = ({ userName, setUserName }) => {
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

const Step6 = ({ email, setEmail }) => {
  return (
    <div>
      <div style={{ marginTop: 10 }} />
      <div className="step1-heading">
        Enter your email
      </div>
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

const Step7 = ({ phone, setPhone }) => {
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

const Step8 = ({ setOtp, otp }) => {
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
  const [selectWindowPurpose, setSelectWindowPurpose] = useState("");
  const [windowCounts, setWindowCounts] = useState("");
  const [creditRatings, setCreditRatings] = useState("");
  const [ownerToWindowChanges, setOwnerToWindowChanges] = useState(true);
  const [stateCity, setStateCity] = useState("");
  const [userName, setUserName] = useState({ firstName: "", lastName: "" });
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newCity, setNewCity] = useState("");
  const [newState, setNewState] = useState("");
  const [leadIdUrl, setLeadIdUrl] = useState("");
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
      if (currentStep < 3) setCurrentStep((prev) => prev + 1);
    }, 100); 
  };
  const stepLabels = [
    { label: "Purpose" },
    { label: "Counts" },
    { label: "Credit Rating" },
    { label: "Property" },
    { label: "Contact" },
    { label: "Verification" }
  ];

  const steps = [
    // Tab 1: Project Details
    <div key="1">
      <Step1
        selectWindowPurpose={selectWindowPurpose}
        setSelectWindowPurpose={setSelectWindowPurpose}
           autoNext={currentStep === 0 ? () => { setValidationError(""); autoNext(); } : undefined}
      />
    </div>,
    <div key="2">
      <Step2 
        windowCounts={windowCounts} 
        setWindowCounts={setWindowCounts} 
        autoNext={currentStep === 1 ? () => { setValidationError(""); autoNext(); } : undefined}
      />
    </div>,
    <div key="3">
      <Step3
        creditRatings={creditRatings}
        setCreditRatings={setCreditRatings}
        autoNext={currentStep === 2 ? () => { setValidationError(""); autoNext(); } : undefined}
      />
    </div>,
    <div key="4">
      <Step4
        stateCity={stateCity}
        setStateCity={setStateCity}
        ownerToWindowChanges={ownerToWindowChanges}
        setNewCity={setNewCity}
        newCity={newCity}
        setNewState={setNewState}
        newState={newState}
        setOwnerToWindowChanges={setOwnerToWindowChanges}
      />
    </div>,
    <div key="5">
      <Step5 userName={userName} setUserName={setUserName} />
      <Step6 email={email} setEmail={setEmail} />
    </div>,
  <div key="6">
      <Step7 
        phone={phone} 
        setPhone={setPhone} 
        autoNext={currentStep === 5 ? () => { setValidationError(""); autoNext(); } : undefined}
      />
    </div>,
  ];

  useEffect(() => {
    loadTrustedFormScript();
    loadJornayaScript();
  }, []);
  const loadJornayaScript = () => {
    // Creating the script element
    const script = document.createElement("script");
    script.id = "LeadiDscript_campaign_Solar";
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "//create.lidstatic.com/campaign/f03643f0-99d1-b06f-a78d-14e98c0dc3e8.js?snippet_version=2";

    // Inserting the script into the DOM
    const existingScript = document.getElementById("LeadiDscript");
    if (existingScript && existingScript.parentNode) {
      existingScript.parentNode.insertBefore(script, existingScript);
    } else {
      document.body.appendChild(script);
    }

    console.log("id :", document.getElementById("LeadiDscript_campaign_Solar"));

    // Logging the Lead ID once the script loads
    script.onload = (dataa) => {
      console.log("script-data :", dataa);

      if (window?.LeadiD) {
        console.log("window-lead :", window?.LeadiD);

        const token = window?.LeadiD?.token;
        setLeadIdUrl(token);
      } else {
        console.log("Jornaya Lead ID is not available");
      }
    };
  };

  const loadTrustedFormScript = () => {
    const tf = document.createElement("script");
    tf.type = "text/javascript";
    tf.async = true;
    tf.src =
      ("https:" === document.location.protocol ? "https" : "http") +
      "://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&ping_field=xxTrustedFormPingUrl&use_tagged_consent=true&l=" +
      new Date().getTime() +
      Math.random();

    // Insert the script tag before the first script tag in the document
    const s = document.getElementsByTagName("script")[0];
    if (s) {
      s.parentNode.insertBefore(tf, s);
    }
  };
  const handleVerify = async () => {
    const verified = await verifyRecaptcha('submit');
    return verified;
  };
  const nextStep = async () => {
      if (currentStep == 0) {
        if (selectWindowPurpose == "") {
          setValidationError("Please select window purpose!");
        } else {
          setValidationError(""); // Clear the error message
          setCurrentStep(currentStep + 1);
        }
      } 
      if (currentStep == 1) {
        if (windowCounts == "") {
          setValidationError("Please select window counts!");
        } else {
          setValidationError(""); // Clear the error message
          setCurrentStep(currentStep + 1);
        }
        return;
      } 
      if (currentStep == 2) {
        if (creditRatings == "") {
          setValidationError("Please select credit ratings!");
        } else {
          setValidationError(""); // Clear the error message
          setCurrentStep(currentStep + 1);
        }
        return;
      } 
      if (currentStep == 3) {
        if (stateCity === "") {
          setValidationError("Please enter state and city!");
        } else {
          setValidationError(""); // Clear the error message
          setCurrentStep(currentStep + 1);
        }
        return;
      } 
      if (currentStep == 4) {
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
          setValidationError(""); // Clear the error message
          setCurrentStep(currentStep + 1);
        }
        return 
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
          console.log(isHuman)  
          if (!isHuman) {
            setValidationError(captchaError);
            return;
          }
        setIsSubmitting(true);
      let zipcode = getLocalData("zipcode");
      // let newState = stateCity.split(',')
      // const location = newState[2].split();
      // const splitLocation = location[0].split(" ");

      let body = {
        credit: creditRatings?.credits,
        email: email,
        firstName: userName?.firstName,
        lastName: userName?.lastName,
        // city: city? city : newState[1],
        city: stateCity,
        numberOfWidnows: windowCounts?.count,
        projectType: selectWindowPurpose?.projectType,
        zip: zipcode,
        // state: state? state : splitLocation[1],
        // ownerToWindowChanges: ownerToWindowChanges,
        source: source,
        phoneNumber: phone,
        trustedFormUrl: certUrlField,
        trustedFormId: certUrlField?.split("/")[3],
        jornayaLeadId: jornayaId,
        userAgent: normalizeUserAgent(window?.navigator?.userAgent),
        ip:ip,
      };

      postData("users", body)
        .then((res) => {
          setIsSubmitting(false);
          if (res?.success) {
            navigate("/window-thankyou-page");
          }
        })
        .catch((error) => console.log("Windows Post API Error", error));
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
       <div className="main-container">
      <div className="form-value-container" ref={formRef}>
        {/* Form Tabs */}
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
    </MainFormView>
  );
}
