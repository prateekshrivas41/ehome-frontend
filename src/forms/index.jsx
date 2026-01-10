import React, { Fragment } from "react"
import { Header } from "../components/header"
import "./formView.css"
export default function MainFormView({ contact, children }) {
    return (
        <Fragment>
            <div className="form-conatiner" >
                <Header contact={contact}/>
                {children}
            </div>
        </Fragment>
    )
}