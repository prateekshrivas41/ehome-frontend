import React, { Fragment } from "react";
import "./stepCounter.css";

export default function StepCounter({ count, step }) {

    const percentageWidth = Math.min(count * step, 100)

    return (
        <Fragment>
            <div className="step-counter-container" >
                <div className="step-count-line" style={{ width: `${percentageWidth}%` }}>
                </div>
            </div>
        </Fragment>
    )
}