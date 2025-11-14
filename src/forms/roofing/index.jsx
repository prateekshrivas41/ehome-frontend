import "./roofingFormCss.css";
import React, { useState, useEffect, useRef } from "react";
import MainFormView from "../index";
import StepCounter from "../../components/stepsCounter";
import PrevNextButtom from "../../components/prevNext";
import FormTabs from "../../components/FromTabs/FormTabs";
import { step1data, step2data, step3Data } from "./stepsData";
import { Modal, TextField } from "@mui/material";
import Autocomplete from "react-google-autocomplete";
import StepLogo from "../../components/stepLogo";
import Checkbox from "@mui/material/Checkbox";
import DialogComponent from "../../components/dialog";
import { useNavigate } from "react-router-dom";
import { postData } from "../../service/ApiService";
import { getLocalData, normalizeUserAgent } from "../../service/LocalData";
import axios from "axios";
// import { CircularProgress } from "@mui/material";
import { useValidation } from "../../context/validationContext";
import animategif from "../../assets/pic.jpg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import TextCaptcha from "./captcharoofing/TextCaptcha";
import useRecaptcha from "../../hooks/useRecaptcha";

// const CaptchaStep = ({ setCaptchaVerified, captchaVerified }) => {
//   const { 
//     isVerified, 
//     isLoading, 
//     error, 
//     verifyRecaptcha 
//   } = useRecaptcha(import.meta.env.VITE_RECAPTCHA_SITE_KEY);

//   const handleVerify = async () => {
//     const verified = await verifyRecaptcha('submit');
//     if (verified) {
//       setCaptchaVerified(true);
//     }
//   };

//   useEffect(() => {
//     if (isVerified) {
//       setCaptchaVerified(true);
//     }
//   }, [isVerified, setCaptchaVerified]);

//   return (
//     <div>
//       <div className="captcha-heading">Please verify you're human</div>
//       <div className="step-options-container">
//         {captchaVerified ? (
//           <div className="captcha-success-message">
//             ✓ You're verified! Click Next to continue.
//           </div>
//         ) : (
//           <div>
//             <button 
//               onClick={handleVerify} 
//               disabled={isLoading}
//               className="verify-button"
//             >
//               {isLoading ? 'Verifying...' : 'Verify I am human'}
//             </button>
//             {error && <div className="error-message" style={{color:"red", marginTop:"10px"}}>{error}</div>}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
const Step1 = ({ selectRoofingPurpose, setSelectRoofingPurpose, autoNext }) => {
  return (
    <div>
      <div className="step1-heading">
        <span className="mobile-break-text">
          Do you want your roof <br className="mobile-only-break" />
          repaired or replaced?
        </span>
      </div>
      <div className="step1-options-container">
        {step1data.map((item) => {
          return (
            <div
              onClick={() => {
                setSelectRoofingPurpose(item);
                if (autoNext) autoNext();
              }}
              key={item.id}
              className={
                selectRoofingPurpose.id === item.id
                  ? "step1-selected-container"
                  : "step1-container"
              }
            >
              <img src={item.img} width={40} height={40} className="option-icon" />
              <div
                className={
                  selectRoofingPurpose.id === item.id
                    ? "step1-selected-options-text"
                    : "step1-options-text"
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

const Step2 = ({ homeowner, sethomeowner, autoNext }) => {
  return (
    <div>
      <div className="step1-heading">Are you a home owner?</div>
      <div className="step2-options-container">
        {step2data.map((item, index) => {
          return (
            <div
              onClick={() => {
                sethomeowner(item);
                if (autoNext) {
                  autoNext();
                }
              }}
              key={item.id}
              className={
                homeowner?.id === item.id
                  ? "step2-selected-container"
                  : "step2-container"
              }
            >
              <div></div>
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
  );
};

const Step3 = ({ materialtype, setmaterialtype, autoNext }) => {
  return (
    <div
      className="material-type-container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {step3Data.map((item, index) => {
        return (
          <div
            key={item.id}
            onClick={() => {
              setmaterialtype(item);
              if (autoNext) autoNext();
            }}
            style={{
              width: "25%", // Set width to 30% for 3 images per row
              height: "102px", // Adjusted height to be closer to image size
              display: "flex",
              flexDirection: "column", // Stack image and text vertically
              justifyContent: "center",
              alignItems: "center", // Center content horizontally
              cursor: "pointer",
              borderRadius: "10px",
              overflow: "hidden",
              boxSizing: "border-box", // Prevent padding from affecting the width/height
              border:
                materialtype.id === item.id
                  ? "2px solid #25aa3d"
                  : "1px solid #ddd",
              marginTop: "10px", // Added top margin for some space above
            }}
          >
            <img
              className="material-type-image"
              src={item.img}
              alt={item.text}
              style={{
                width: "100%", // Image width fills container
                height: "auto", // Adjust height to maintain aspect ratio
                maxHeight: "70px", // Optional: limit the image height to fit better
                objectFit: "cover", // Ensure image fits within container
              }}
            />
            <div
              className="text-container"
              style={{
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "medium",
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

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Step4 = ({
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
          key={stateCity} // Add key to reset component on selection
          apiKey={"AIzaSyCpe8T2-LTEaHWGZlPa0-uxoVUcQTQzltY"}
          defaultValue={stateCity}
          onPlaceSelected={(place) => {
            setStateCity(place?.formatted_address);
          }}
          // onChange={(getdata) => {}}
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
      <div className="step1-heading">
        Enter your email
      </div>
      <div style={{ marginTop: 10 }} />
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
          inputProps={{
            maxLength: 10, // Restrict input to 10 characters
          }}
          size="small"
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
          NetworX
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
      <div className="step1-heading">
        Enter phone number Otp here
      </div>
      <div />
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
  const [selectRoofingPurpose, setSelectRoofingPurpose] = useState("");
  const [homeowner, sethomeowner] = useState("");
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
  const [captchaVerified, setCaptchaVerified] = useState(false);
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
    }, 100); // slight delay for UI feedback
  };

const stepLabels = [
  { label: "Purpose" },
  { label: "Material" },
  { label: "Property" },
  { label: "Contact" },
  { label: "Verification" },
];

  // Step 4: Step2 (homeowner) + Step4 (location)
  const StepPropertyOwnership = (props) => (
    <>
      <Step2
        homeowner={homeowner}
        sethomeowner={sethomeowner}
        autoNext={undefined}
      />
      <div style={{ marginTop: 24 }} />
      <Step4
        stateCity={stateCity}
        setStateCity={setStateCity}
        ownerToRoofinChanges={ownerToRoofinChanges}
        setownerToRoofinChanges={setownerToRoofinChanges}
        setNewCity={setNewCity}
        newCity={newCity}
        setNewState={setNewState}
        newState={newState}
      />
    </>
  );


  // Steps array
const steps = [
  <div key="1">
    <Step1
      selectRoofingPurpose={selectRoofingPurpose}
      setSelectRoofingPurpose={setSelectRoofingPurpose}
      autoNext={currentStep === 0 ? () => { setValidationError(""); autoNext(); } : undefined}
    />
  </div>,
  <div key="2">
    <Step3
      materialtype={materialtype}
      setmaterialtype={setmaterialtype}
      autoNext={currentStep === 1 ? () => { setValidationError(""); autoNext(); } : undefined}
    />
  </div>,
  <div key="3">
    <StepPropertyOwnership />
  </div>,
  <div key="4">
 
     <Step5 userName={userName} setUserName={setUserName} />
    <Step6 email={email} setEmail={setEmail} />
  </div>,
  <div key="5">
    <>
      <Step7 phone={phone} setPhone={setPhone} />
      {/* <CaptchaStep setCaptchaVerified={setCaptchaVerified} captchaVerified={captchaVerified} /> */}
    </>
  </div>,
];

  useEffect(() => {
    const fetchCityState = async () => {
      try {
        const zipcode = getLocalData("zipcode"); // Ensure getLocalData is correctly defined
        console.log("in-Zip", zipcode);

        const response = await axios.get(
          `https://api.zippopotam.us/us/${zipcode}`
        );
        const places = response?.data?.places;
        console.log("in-places", places);

        setCity(places[0]["place name"]);
        setState(places[0]["state abbreviation"]);
      } catch (error) {
        console.error("Error fetching city and state:", error);
      }
    };

    fetchCityState();
  }, []);

  useEffect(() => {
    const formEl = formRef.current;
    const stickyBar = prevNextRef.current;
    if (!formEl || !stickyBar) return;

    const isMobile = () => window.innerWidth <= 768;

    const handleInputFocus = (e) => {
      if (isMobile()) {
        setTimeout(() => {
          e.target.scrollIntoView({ behavior: "smooth", block: "center" });
          stickyBar.classList.add("keyboard-visible");
          stickyBar.scrollIntoView({ behavior: "smooth", block: "end" });
        }, 300);
      }
    };
    const handleInputBlur = () => {
      if (isMobile()) {
        setTimeout(() => {
          if (!formEl.querySelector(":focus")) {
            stickyBar.classList.remove("keyboard-visible");
          }
        }, 100);
      }
    };

    const inputs = formEl.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("focus", handleInputFocus);
      input.addEventListener("blur", handleInputBlur);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", handleInputFocus);
        input.removeEventListener("blur", handleInputBlur);
      });
    };
  }, [currentStep]);
  const handleVerify = async () => {
    const verified = await verifyRecaptcha('submit');
    return verified;
  };
  const nextStep = async () => {
   if (currentStep === 0) {
    if (selectRoofingPurpose === "") {
      setValidationError("Please select roofing purpose!");
    } else {
      setValidationError("");
      setCurrentStep(currentStep + 1);
    }
    return;
  }
  if (currentStep === 1) {
    if (materialtype === "") {
      setValidationError("Please select material type!");
    } else {
      setValidationError("");
      setCurrentStep(currentStep + 1);
    }
    return;
  }
  if (currentStep === 2) {
    if (homeowner === "") {
      setValidationError("Please select home owner!");
    } else if (stateCity === "") {
      setValidationError("Please enter state and city!");
    } else {
      setValidationError("");
      setCurrentStep(currentStep + 1);
    }
    return;
  }
  if (currentStep === 3) {
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
  if (currentStep === 4) {
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
        projectType: selectRoofingPurpose?.value,
        homeOwner: homeowner?.value,
        roofMaterial: materialtype?.value,
        address: stateCity,
        // ownerToRoofinChanges: ownerToRoofinChanges,
        firstName: userName?.firstName,
        lastName: userName?.lastName,
        email: email,
        phoneNumber: phone,
        trustedFormUrl: certUrlField,
        jornayaLeadId: jornayaId,
        state: state ? state : splitLocation[1],
        city: city ? city : newState[1],
        source: source,
        userAgent: normalizeUserAgent(window?.navigator?.userAgent),
        sessionTime: "30",
        trustedFormCertId: certUrlField?.split('/')[3],
        ip: ip,
      };

      const elements = document.getElementsByClassName("form-conatiner");
      const getroffingcss = document.getElementsByClassName(
        "roofing-form-container"
      );
      for (let cs of getroffingcss) {
        cs.style.background = "none";
      }
      for (let element of elements) {
        element.style.filter = "blur(5px)"; // Apply a 5px blur to the element
      }


      // console.log("body", body);
      postData("roofing", body)
        .then((res) => {
          if (res?.success === true) {
            setIsSubmitting(true);
            setTimeout(() => {
              navigate("/roofingThankYou", {
                state: res?.data,
              });
            }, 2000);
          } else {
            alert("Error in Api");
            setTimeout(() => {
              navigate("/");
            }, 2000);
          }
        })
        .catch((error) => {
          console.error("Error in API call:", error);
          alert("Error in Api");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        });
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
      <div className="roofing-main-container">
        <div className="roofing-form-container" ref={formRef}> 
          {/* Tabs on top, horizontal */}
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
            <Modal
              className="roffing-loading-modal"
              open={true}
              // onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <>
                <div className="loader-div">
                  <div className="loader-text">
                    <div style={{ display: "grid" }}>
                      <h2 style={{ fontSize: "1.4rem", textWrap: "wrap" }}>
                        We’re currently gathering the best local experts in your
                        area.
                        <br />
                        <span
                          style={{
                            fontSize: "1rem",
                            marginTop: "5px",
                            color: "purple",
                          }}
                        >
                          Please hold tight!
                        </span>
                      </h2>
                    </div>
                    <div className="dot-lottie-roofing">
                      <DotLottieReact
                        style={{ width: "120px", height: "120px" }}
                        src="https://lottie.host/b4b311ba-fda6-450a-b0fe-766288ac9e54/gEPz1RgRFk.lottie"
                        loop
                        autoplay
                      />
                      {/* <CircularProgress size={60} color="primary" /> */}
                    </div>
                  </div>
                  <div className="loader-img">
                    <img className="this-img" src={animategif} />
                  </div>
                </div>
              </>
            </Modal>
          )}
          <StepCounter count={currentStep} step={20} />{" "}
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
          {/* The validation error will appear if present */}
          {/* {validationError && (
            <div
              className="error_div"
              style={{ color: "red", textAlign: "center" }}
            >
              {validationError}
            </div>
          )} */}
          {currentStep !== steps.length - 1 && <StepLogo />}{" "}
          {/* Avoid rendering StepLogo at step 6 */}
          <div style={{ marginBottom: 10 }} />
          {/* <div className="nav-wrapper"> */}
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
          {/* </div> */}
          <div style={{ marginBottom: 10 }} />
        </div>
      </div>
      {/* </ValidationProvider> */}
    </MainFormView>
  );
}
