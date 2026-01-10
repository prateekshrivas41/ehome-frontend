import React from "react";
import MainFormView from "../../../forms";
import "./homewarrantyThankYou.css"
import thankyou1 from "../../../assets/windowLogo/thankyou/1.png"
import thankyou2 from "../../../assets/windowLogo/thankyou/2.jpg"
import thankyou3 from "../../../assets/windowLogo/thankyou/3.png"
import { Button } from "@mui/material"
import { colors } from "../../../constants/Colors";
import animationData from '../../../assets/lottie/timer.json';
import Lottie from 'react-lottie';
import { useEffect } from "react"; 
import { useLocation } from "react-router-dom";

const data = [
    {
        id: 1,
        image: thankyou1,
        heading: 'Home Insurance',
        subHeading: 'Are you paying to much for home insurance?',
        points: [
            'Free online quotes in minutes',
            'Find great coverage and save money',
            'Bundle and save',
        ],
        link: 'https://seize-the-ads.vnative.net/click?campaign_id=11692&pub_id=7'
    },
    {
        id: 2,
        image: thankyou2,
        heading: 'Home security programs',
        subHeading: 'Kindly check on priority is your home safe or not?',
        points: [
            'Affordable Home security programs',
            'Make your loved ones safe and secure',
            'Choose from variety of options',
        ],
        link: 'https://seize-the-ads.vnative.net/click?campaign_id=11693&pub_id=7'
    },
    {
        id: 3,
        image: thankyou3,
        heading: 'Check your score',
        subHeading: 'Check your position to receive financing',
        points: [
            'Check for potential errors and verify accuracy',
            'Avoid unpleasent surprises',
            'Checking your scores will not affect your score',
        ],
        link: 'https://seize-the-ads.vnative.net/click?campaign_id=11691&pub_id=7'
    },
]
export default function ThankYouPage() {
    const location = useLocation();
    const { price } = location?.state || {};
    const defaultOptions = {
        loop: true,
        autoplay: true, // Animation will play automatically
        animationData: animationData, // Animation JSON data
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice', // You can adjust this to control how the animation scales
        },
    };
   
  




    useEffect(() => {
        
        const script = document.createElement("script");
        script.src = "https://static-cdn.trackier.com/js/trackier-web-sdk.js";
        script.async = true;
    
        script.onload = () => {
    
          
          if (window.TrackierWebSDK) {
            window.TrackierWebSDK.trackConv(
              "seize-the-ads.vnative.net", 
              "63a0327fc3d7091b7266fa23", 
              {
                is_camp: true,
                sale_amount: price, 
                is_iframe: true
              }
            );
          } else {
            console.error("TrackierWebSDK is not available");
          }
        };
    
        script.onerror = () => {
          console.error("Failed to load Trackier Web SDK Script");
        };
    
        document.body.appendChild(script);
    
        
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    return (
        <div>
            <MainFormView>
                <div className="sub-thank-you-text" >
                    Thanks for your patience!
                </div>
                <div className="describe-thank-you-text" >
                    A contractor consultant, who aligns with your needs,<br /> will be calling you within the next few minutes to discuss your quote in detail.
                </div>
                <Lottie options={defaultOptions} height={200} width={200} style={{marginTop:40,cursor:'auto'}} />
            </MainFormView>
            <div className="solar-cards-container" >
                {data.map((item) => {
                    return (
                        <div className="thank-you-card-container" >
                            <img src={item.image} width={'100%'} height='50%' />
                            <div style={{ padding: 10 }} >
                                <div className="card-heading" >
                                    {item.heading}
                                </div>
                                <div className="card-sub-heading" >
                                    {item.subHeading}
                                </div>
                                {item.points.map((item,index) => {
                                    return (
                                        <div className="card-sub-heading-point-text" >
                                            {index+1} {item}
                                        </div>
                                    )
                                })}
                            </div>
                            <Button
                                type="button"
                                // onClick={prevClick}
                                variant="contained"
                                sx={{
                                    height: 40,
                                    backgroundColor: colors.primaryGreen,
                                    marginBottom: 2
                                }}
                                style={{
                                    width: '90%', fontSize: '13px',
                                    fontFamily: 'poppins',
                                    textTransform: 'capitalize',
                                    color: '#FFFFFF',
                                }}
                                id="main-btn"
                            >
                                GET STARTED
                            </Button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}