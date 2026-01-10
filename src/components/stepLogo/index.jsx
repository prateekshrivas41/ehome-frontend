import React from "react";
import GoogleLogo from "../../assets/step-logo-google.png"
import RatingLogo from "../../assets/rating-step-logo.png"
import './stepLogo.css'

export default function StepLogo() {
    return (
        <div className="step-logo-container" >
            <img src={GoogleLogo} width={70} height={40} className="step-logo-image" />
            <img src={RatingLogo} width={70} height={40} className="step-logo-image" />
        </div>
    )
}