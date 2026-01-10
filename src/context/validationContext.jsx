import { createContext, useContext, useState } from "react";

export const ValidationContext = createContext();

export const useValidation = () => { 
    return useContext(ValidationContext);;
};


export const ValidationProvider = ({ children }) => {

    const [validationError, setValidationError] = useState("");
    return (
        <ValidationContext.Provider value={{ validationError, setValidationError }}>
            {children}
        </ValidationContext.Provider>
    );
};