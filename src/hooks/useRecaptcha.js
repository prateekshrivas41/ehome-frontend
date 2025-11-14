// src/hooks/useRecaptcha.js
import { useState, useCallback, useEffect } from 'react';
import axios from 'axios'
const useRecaptcha = () => {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [captchaError, setCaptchaError] = useState(null);
  const verifyRecaptcha = useCallback(async (action = 'submit') => {
    if (!window.grecaptcha) {
      setCaptchaError('Unable to process your request. Please Re-Submit the form');
      return false;
    }

    try {
      setIsLoading(true);
      const token = await window.grecaptcha.execute(siteKey, { action });
      const response = await axios.post(import.meta.env.VITE_APP_API_BASE_URL + '/verify-recaptcha', {
        token,
        action,
      });
      const data = await response.data;
      if(!data.success){
        setCaptchaError('Unable to process your request. Please Re-Submit the form');
        return false;
      }
      setIsVerified(data.success);
      return data.success;
    } catch (err) {
      setCaptchaError('Unable to process you request. Please try again later');
      console.error('reCAPTCHA error:', err);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [siteKey]);

  return {
    isVerified,
    isLoading,
    captchaError,
    verifyRecaptcha,
  };
};

export default useRecaptcha;