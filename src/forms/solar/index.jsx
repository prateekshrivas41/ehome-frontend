import "./solarCss.css";
import React, { useContext, useState, useRef } from "react";
import MainFormView from "../index";
import StepCounter from "../../components/stepsCounter";
import PrevNextButtom from "../../components/prevNext";
import {
  solarDataAdjust,
  solarDataAdjust1,
  solarDataAdjust2,
  solarDataAdjust3,
  step1data,
  step2Data,
  step3data,
  step4Data,
  step5Data,
  step6Data,
} from "./stepsData";
import { TextField } from "@mui/material";
import Autocomplete from "react-google-autocomplete";
import StepLogo from "../../components/stepLogo";
import Checkbox from "@mui/material/Checkbox";
import DialogComponent from "../../components/dialog";
import { useNavigate } from "react-router-dom";
import { postData } from "../../service/ApiService";
import { getLocalData, normalizeUserAgent } from "../../service/LocalData";
import useRecaptcha from "../../hooks/useRecaptcha";
import FormTabs from "../../components/FromTabs/FormTabs";
import { CircularProgress } from "@mui/material";

import { useValidation } from "../../context/validationContext";

const Step1 = ({
  selectelecticitybill,
  setselectelecticitybill,
  homeowner,
  sethomeowner,
}) => {
  return (
    <div>
      <div className="step1-heading">
        What is your average monthly electricity bill?
      </div>

      {/* Dropdown to select the electricity bill */}
      <div className="step1-dropdown-container">
        <select
          id="electricity-bill-dropdown"
          className="form-control"
          value={selectelecticitybill.id} // Set the selected value from the state
          onChange={(e) => {
            const selectedItem = step1data.find(
              (item) => item.id === parseInt(e.target.value),
            );
            setselectelecticitybill(selectedItem); // Update the selected item in state
          }}
        >
          {step1data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.text}
            </option>
          ))}
        </select>
      </div>

      {/* New Question for Homeowner */}
      <div className="step1-heading">Are you a homeowner?</div>

      {/* Dropdown to select Homeowner */}
      <div className="step1-dropdown-container">
        <select
          id="homeowner-dropdown"
          className="form-control"
          value={homeowner?.id} // Set the selected value from the state
          onChange={(e) => {
            const selectedItem = step4Data.find(
              (item) => item.id === parseInt(e.target.value),
            );
            sethomeowner(selectedItem); // Update the selected item in state
          }}
        >
          {step4Data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const Step2 = ({
  creditRatings,
  setCreditRatings,
  installationDate,
  setInstallationDate,
}) => {
  return (
    <div>
      {/* New Question: When are you planning to have installation? */}
      <div className="step1-heading">
        When are you planning to have installation?
      </div>

      {/* Dropdown to select the installation date */}
      <div className="step2-dropdown-container">
        <select
          id="installation-date-dropdown"
          className="form-control"
          value={installationDate?.id} // Set the selected value from the state
          onChange={(e) => {
            const selectedItem = step5Data.find(
              (item) => item.id === parseInt(e.target.value),
            );
            setInstallationDate(selectedItem); // Update the selected item in state
          }}
        >
          {step5Data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.text}
            </option>
          ))}
        </select>
      </div>

      {/* Credit Rating Question */}
      <div className="step1-heading">What's your credit rating?</div>

      {/* Dropdown to select the credit rating */}
      <div className="step2-dropdown-container">
        <select
          id="credit-rating-dropdown"
          className="form-control"
          value={creditRatings?.id} // Set the selected value from the state
          onChange={(e) => {
            const selectedItem = step2Data.find(
              (item) => item.id === parseInt(e.target.value),
            );
            setCreditRatings(selectedItem); // Update the selected item in state
          }}
        >
          {step2Data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const Step3 = ({
  sunlight,
  setsunlight,
  utilityProvider,
  setUtilityProvider,
}) => {
  return (
    <div>
      {/* Question 1: How much sunlight does your roof get? */}
      <div className="step1-heading">How much sunlight does your roof get?</div>

      {/* Dropdown to select the sunlight exposure */}
      <div className="step2-dropdown-container">
        <select
          id="sunlight-dropdown"
          className="form-control"
          value={sunlight?.id} // Set the selected value from the state
          onChange={(e) => {
            const selectedItem = step3data.find(
              (item) => item.id === parseInt(e.target.value),
            );
            setsunlight(selectedItem); // Update the selected item in state
          }}
        >
          {step3data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.text}
            </option>
          ))}
        </select>
      </div>

      {/* Question 2: What is your utility provider? */}
      <div className="step1-heading">What is your utility provider?</div>

      {/* Dropdown to select the utility provider */}
      <div className="step2-dropdown-container">
        <select
          id="utility-provider-dropdown"
          className="form-control"
          value={utilityProvider?.id} // Set the selected value from the state
          onChange={(e) => {
            const selectedItem = step6Data.find(
              (item) => item.id === parseInt(e.target.value),
            );
            setUtilityProvider(selectedItem); // Update the selected item in state
          }}
        >
          {step6Data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.text}
            </option>
          ))}
        </select>
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
      </div>
    </div>
  );
};

const Step6 = ({ email, setEmail }) => {
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
          <Checkbox
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
          Momentum solar
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
            inputProps={{
              maxLength: 10, // Restrict input to 10 characters
            }}
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
  const [selectelecticitybill, setselectelecticitybill] = useState(
    step1data[0],
  );
  const [sunlight, setsunlight] = useState(step3data[0]);
  const [creditRatings, setCreditRatings] = useState(step2Data[0]);
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
  const [homeowner, sethomeowner] = useState(step4Data[0]);
  const [installationDate, setInstallationDate] = useState(step5Data[0]);
  const [utilityProvider, setUtilityProvider] = useState(step6Data[0]);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const formRef = useRef(null);
  const prevNextRef = useRef(null);
  const { isVerified, isLoading, captchaError, verifyRecaptcha } =
    useRecaptcha();
  const stepLabels = [
    { label: "Homeowner" },
    { label: "Credit Rating" },
    { label: "Utility Provider" },
    { label: "Property" },
    { label: "Contact" },
    { label: "Verification" },
  ];
  const steps = [
    <div key="1">
      <Step1
        selectelecticitybill={selectelecticitybill}
        setselectelecticitybill={setselectelecticitybill}
        homeowner={homeowner}
        sethomeowner={sethomeowner}
      />
    </div>,
    <div key="2">
      <Step2
        creditRatings={creditRatings}
        setCreditRatings={setCreditRatings}
        installationDate={installationDate}
        setInstallationDate={setInstallationDate}
      />
    </div>,
    <div key="3">
      <Step3
        sunlight={sunlight}
        setsunlight={setsunlight}
        utilityProvider={utilityProvider}
        setUtilityProvider={setUtilityProvider}
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
      <Step7 phone={phone} setPhone={setPhone} />
    </div>,
    //   <div key="7">
    //  <Step8 otp={otp} setOtp={setOtp} />
    //   </div>,
  ];
  const handleVerify = async () => {
    const verified = await verifyRecaptcha("submit");
    return verified;
  };
  const nextStep = async () => {
    if (currentStep == 0) {
      if (!selectelecticitybill && !homeowner) {
        setValidationError("Please select electicity bill and homeowner!");
      } else if (!selectelecticitybill) {
        setValidationError("Please select electicity bill!");
      } else if (!homeowner) {
        setValidationError("Please select homeowner!");
      } else {
        setValidationError(""); // Clear the error message
        setCurrentStep(currentStep + 1);
      }
      return;
    }
    if (currentStep == 1) {
      if (!creditRatings && !installationDate) {
        setValidationError(
          "Please select installation date and credit ratings!",
        );
      } else if (!installationDate) {
        setValidationError("Please select installation date!");
      } else if (!creditRatings) {
        setValidationError("Please select credit ratings!");
      } else {
        setValidationError(""); // Clear the error message
        setCurrentStep(currentStep + 1);
      }
      return;
    }
    if (currentStep == 2) {
      if (!utilityProvider && !sunlight) {
        setValidationError("Please select utility provider and ratio!");
      } else if (!utilityProvider) {
        setValidationError("Please select utility provider!");
      } else if (!sunlight) {
        setValidationError("Please select ratio!");
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
      let newState = stateCity.split(",");
      const location = newState[2].split();
      const splitLocation = location[0].split(" ");

      let body = {
        zip: zipcode,
        utilitybill: solarDataAdjust2(selectelecticitybill?.projectType),
        creditScore: creditRatings?.credits,
        roofShade: solarDataAdjust(sunlight?.count),
        electricUtilityProvider: solarDataAdjust3(utilityProvider?.text),
        timeFrame: solarDataAdjust1(installationDate?.text),
        email: email,
        userAgent: normalizeUserAgent(window?.navigator?.userAgent),
        source: source,
        address: stateCity,
        firstName: userName?.firstName,
        lastName: userName?.lastName,
        phoneNumber: phone,
        trustedFormId: certUrlField?.split("/")[3],
        trustedFormUrl: certUrlField,
        jornayaLeadId: jornayaId,
        state: state ? state : splitLocation[1],
        city: city ? city : newState[1],
        homeOwner: homeowner?.text,
        ip: ip,
      };

      console.log("solar-body", body);

      postData("solar", body)
        .then((res) => {
          if (res?.success) {
            setIsSubmitting(false);
            navigate("/solar-thankyou-page", {
              state: res?.data,
            });
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
      {/* <ValidationProvider> */}
      <div className="main-container">
        <div className="form-value-container" ref={formRef}>
          {/* Form Tabs */}
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
          <StepCounter
            count={currentStep}
            step={16.6} //13.4 for otp loading view
          />
          <div className="transition-wrapper">
            {steps?.map((step, index) => (
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
          <div style={{ marginBottom: 10 }} />
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
