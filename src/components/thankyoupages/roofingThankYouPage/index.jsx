import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import Lottie from "react-lottie";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import animationData from "../../../assets/lottie/timer.json";
import thankyou1 from "../../../assets/windowLogo/thankyou/1.png";
import thankyou2 from "../../../assets/windowLogo/thankyou/2.jpg";
import thankyou3 from "../../../assets/windowLogo/thankyou/3.png";
import myImage from "../../../assets/ehomequoteLogo.png";
import { colors } from "../../../constants/Colors";
import "./thankyou.css";

const data = [
  {
    id: 1,
    image: thankyou1,
    heading: "Home Insurance",
    subHeading: "Are you paying too much for home insurance?",
    points: [
      "Free online quotes in minutes",
      "Find great coverage and save money",
      "Bundle and save",
    ],
    link: "https://seize-the-ads.vnative.net/click?campaign_id=11692&pub_id=7",
  },
  {
    id: 2,
    image: thankyou2,
    heading: "Home security programs",
    subHeading: "Kindly check on priority: is your home safe or not?",
    points: [
      "Affordable Home security programs",
      "Make your loved ones safe and secure",
      "Choose from a variety of options",
    ],
    link: "https://seize-the-ads.vnative.net/click?campaign_id=11693&pub_id=7",
  },
  {
    id: 3,
    image: thankyou3,
    heading: "Check your score",
    subHeading: "Check your position to receive financing",
    points: [
      "Check for potential errors and verify accuracy",
      "Avoid unpleasant surprises",
      "Checking your scores will not affect your score",
    ],
    link: "https://seize-the-ads.vnative.net/click?campaign_id=11691&pub_id=7",
  },
];

export default function ThankYouPage() {
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(true);
  const [iframeLoading, setIframeLoading] = useState(true);
  const location = useLocation();
  const { price, redirect_url } = location?.state || {};

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // useEffect(() => {
  //   if (redirect_url) setLoading(false);

  //   const timer = setTimeout(() => {
  //     setShowMessage(true);
  //   }, 3000);

  //   function loadTrackierScript(callback) {
  //     if (window.TrackierWebSDK) {
  //       callback();
  //       return;
  //     }
  //     if (document.getElementById("trackier-sdk")) {
  //       const existingScript = document.getElementById("trackier-sdk");
  //       existingScript.addEventListener("load", callback);
  //       return;
  //     }
  //     const script = document.createElement("script");
  //     script.src = "https://static-cdn.trackier.com/js/trackier-web-sdk.js";
  //     script.async = true;
  //     script.id = "trackier-sdk";
  //     script.onload = callback;
  //     document.head.appendChild(script);
  //   }

  //   // REMOVE THIS CHECK FOR DEBUGGING:
  //   // if (typeof price !== "undefined") {
  //     loadTrackierScript(() => {
  //       console.log("Trackier script loaded!");
  //       if (window.TrackierWebSDK) {
  //         window.TrackierWebSDK.trackConv(
  //           "seize-the-ads.vnative.net",
  //           "63a0327fc3d7091b7266fa23",
  //           {
  //             is_camp: true,
  //             sale_amount: price === 0 ? 0.10 : Number(price),
  //             is_iframe: true,
  //           }
  //         );
  //       } else {
  //         console.error("TrackierWebSDK not loaded!");
  //       }
  //     });
  //   // }

  //   console.log("Price:", price);
  //   console.log("window.TrackierWebSDK:", window.TrackierWebSDK);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [price, redirect_url]);

  // useEffect(() => {
  //   if (redirect_url) setLoading(false);

  //   const timer = setTimeout(() => {
  //     setShowMessage(true);
  //   }, 3000);

  //   function fireTrackierConversion() {
  //     if (window.TrackierWebSDK) {
  //       window.TrackierWebSDK.trackConv(
  //         "seize-the-ads.vnative.net",
  //         "63a0327fc3d7091b7266fa23",
  //         {
  //           is_camp: true,
  //           sale_amount: price === 0 ? 0.10 : Number(price),
  //           is_iframe: true,
  //         }
  //       );
  //     } else {
  //       // Retry after a short delay if SDK isn't ready yet
  //       setTimeout(fireTrackierConversion, 200);
  //     }
  //   }

  //   if (typeof price !== "undefined") {
  //     fireTrackierConversion();
  //   }

  //   console.log("window.TrackierWebSDK:", window.TrackierWebSDK);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [price, redirect_url]);

  const handleIframeLoad = () => setIframeLoading(false);

  useEffect(() => {
    // console.log("thankyoupage", window.dataLayer)
    if (window.gtag) {
      window.gtag('event', 'conversion', {'send_to': 'AW-17650984124/FmKvCNa7g64bELzJ0uBB'});
    }
  }, []);
  const pixelUrl = `https://seize-the-ads.vnative.net/pixel?adid=63a0327fc3d7091b7266fa23&revenue=${
    price === 0 ? 0.10 : Number(price)
  }`;

  return (
    <div>
      <img id="thankyou-logo-img" src={myImage} alt="Ehome" />

      <div id="thankyou-class" style={{ textAlign: "center" }}>
        {!redirect_url ? (
          <>
            <Lottie
              options={defaultOptions}
              height={200}
              width={200}
              style={{ marginTop: 40, cursor: "auto" }}
            />
            <div style={{ display: "grid" }}>
              <h2>Thanks for your Patience !!</h2>
              <h3 style={{ fontSize: "1.2rem" }}>
                A contractor consultant, who aligns with your needs, <br />
                will be calling you within the next few minutes.
              </h3>
            </div>
          </>
        ) : (
          <>
            {!loading && (
              <>
                {iframeLoading && (
                  <>
                    <div id="loading-spinner">
                      <DotLottieReact
                        style={{ width: "300px", height: "300px" }}
                        src="https://lottie.host/b4b311ba-fda6-450a-b0fe-766288ac9e54/gEPz1RgRFk.lottie"
                        loop
                        autoplay
                      />
                    </div>
                    <div>
                      <h5>
                        <span style={{ fontWeight: "700" }}>Hold on!!</span> We
                        are curating some tailor-made offers based on your
                        inputs
                      </h5>
                    </div>
                  </>
                )}

                {/* Show the text only when iframe has finished loading */}
                {!iframeLoading && (
                  <div style={{ textAlign: "center" }}>
                    <div>Thanks for your patience!</div>
                    <div>
                      A contractor consultant, who aligns with your needs,
                      <br /> will be calling you within the next few minutes to
                      discuss your quote in detail.
                    </div>
                  </div>
                )}

                {/* The iframe */}
                <div
                  style={{
                    height: "650px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <iframe
                    id="networx-frame"
                    src={redirect_url}
                    width="100%"
                    height="100%"
                    title="Iframe"
                    loading="eager"
                    onLoad={handleIframeLoad}
                  ></iframe>
                </div>
              </>
            )}
          </>
        )}
      </div>

      <div className="cards-container">
        {data.map((item) => (
          <div key={item.id} className="thank-you-card-container">
            <img
              src={item.image}
              width="100%"
              height="50%"
              alt={item.heading}
            />
            <div style={{ padding: 10 }}>
              <div className="card-heading">{item.heading}</div>
              <div className="card-sub-heading">{item.subHeading}</div>
              {item.points.map((point, index) => (
                <div key={index} className="card-sub-heading-point-text">
                  {index + 1}. {point}
                </div>
              ))}
            </div>
            <Button
              type="button"
              variant="contained"
              sx={{
                height: 40,
                backgroundColor: colors.primaryGreen,
                marginBottom: 2,
              }}
              style={{
                width: "90%",
                fontSize: "13px",
                fontFamily: "Poppins",
                textTransform: "capitalize",
                color: "#FFFFFF",
              }}
              id="main-btn"
              onClick={() => window.open(item.link, "_blank")}
            >
              GET STARTED
            </Button>
          </div>
        ))}
      </div>

         {/* Trackier Pixel Iframe */}
      {typeof price !== "undefined" && (
        <iframe
          src={pixelUrl}
          scrolling="no"
          frameBorder="0"
          width="1"
          height="1"
          style={{ display: "none" }}
          title="Trackier Conversion Pixel"
        ></iframe>
      )}
    </div>
  );
}
