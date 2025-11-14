import React, { useState, useEffect } from "react";
import axios from "axios";
import "./captcha.css";

// Your deployed API URL
const apiBaseUrl = import.meta.env.VITE_APP_API_BASE_URL;
// const API_URL = `${apiBaseUrl}/api/captcha/generate`;

const TextCaptcha = ({ onVerify }) => {
  const [captchaImage, setCaptchaImage] = useState("");
  const [captchaHash, setCaptchaHash] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [verificationAttempted, setVerificationAttempted] = useState(false);

  // Function to fetch a new CAPTCHA
  const fetchNewCaptcha = async () => {
    setIsLoading(true);
    setMessage("");
    setUserInput("");
    setVerificationAttempted(false);
    // In your fetchNewCaptcha function
    try {
      const response = await axios.get(`${apiBaseUrl}/generate`);
      if (response.data && response.data.data.image) {
        setCaptchaImage(response.data.data.image);
        setCaptchaHash(response.data.data.hash);
      } else {
        throw new Error("Invalid CAPTCHA data received");
      }
    } catch (error) {
      console.error("Error fetching CAPTCHA:", error);
      if (error.code === "ECONNABORTED" || error.message.includes("timeout")) {
        setMessage("Request timed out. Please try again.");
      } else if (!navigator.onLine) {
        setMessage("No internet connection. Please check your network.");
      } else {
        setMessage("Failed to load CAPTCHA. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch CAPTCHA on component mount
  useEffect(() => {
    fetchNewCaptcha();
  }, []);

  // Handle user input change
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Handle CAPTCHA submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setVerificationAttempted(true);

    try {
      const response = await axios.post(`${apiBaseUrl}/verify`, {
        userInput,
        captchaHash,
      });

      if (response.data.message) {
        setMessage("✓ Verification successful!");
        onVerify(true); // Tell parent component verification succeeded
      } else {
        setMessage("Verification failed. Please try again.");
        onVerify(false);
        fetchNewCaptcha(); // Get a new CAPTCHA after failed attempt
      }
    } catch (error) {
      console.error("Error verifying CAPTCHA:", error);
      setMessage(
        error.response?.data?.message ||
          "An error occurred during verification."
      );
      onVerify(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-captcha-container">
      <div className="captcha-inner">
        {isLoading ? (
          <div className="captcha-loading">Loading CAPTCHA...</div>
        ) : (
          <>
            {captchaImage && (
              <div className="captcha-image-container">
                <img
                  src={captchaImage}
                  alt="CAPTCHA"
                  className="captcha-image"
                />
              </div>
            )}
            <form onSubmit={handleSubmit} className="captcha-form">
              <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                placeholder="Enter the text"
                disabled={isLoading}
                required
                className="captcha-input"
              />
              <div className="captcha-buttons">
                <button
                  type="submit"
                  disabled={isLoading || !userInput}
                  className="captcha-verify-btn"
                >
                  Verify
                </button>
                <button
                  type="button"
                  onClick={fetchNewCaptcha}
                  disabled={isLoading}
                  className="captcha-refresh-btn"
                >
                  ↻
                </button>
              </div>
            </form>
            {/* {message && (
              <div
                className={`captcha-message ${
                  message.includes("✓") ? "success" : "error"
                }`}
              >
                {message}
              </div>
            )} */}
          </>
        )}
      </div>
    </div>
  );
};

export default TextCaptcha;
