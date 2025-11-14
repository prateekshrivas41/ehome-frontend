import React, { Fragment } from "react"
import { Header } from "../components/header"
import "./formView.css"
export default function MainFormView({ children }) {
    return (
        <Fragment>
            <div className="form-conatiner" >
                <Header />
                {children}
            </div>
        </Fragment>
    )
}