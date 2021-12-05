import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';


const userForm = () => {

    const [step, setStep] = useState(1)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mail, setMail] = useState("")
    const [values, setValues] = useState({})

    // Proceed to next step
    const nextStep = () => {
        setStep(step + 1)
    };

    // Go back to prev step
    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1)
        }
        else {
            alert("Kein vorheriger Schritt vorhanden.")
        }
    };

    // Handle fields change
    const handleChange = (input) => {
        alert(input)
    };


    switch (step) {
        case 1:
            return (
                <FormUserDetails
                    values={values}
                    handleChange={handleChange}
                />
            );
        case 2:
            return (
                <FormPersonalDetails />
            );
    }
}

export default userForm
