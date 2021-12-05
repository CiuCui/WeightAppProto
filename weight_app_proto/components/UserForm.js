import React, { useState, useEffect } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';


const userForm = () => {

    const [step, setStep] = useState(1)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mail, setMail] = useState("")
    const [age, setAge] = useState("")
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")

    const [values, setValues] = useState({})

    useEffect(() => {
        setValues({ step, firstName, lastName, mail, age, weight, height })
    }, [step, firstName, lastName, mail, age, weight, height])


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
    const handleChange = (input, e) => {
        switch (input) {
            case "firstName":
                console.log("Firstname: ", e.target.value)
                setFirstName(e.target.value);
                break;
            case "lastName":
                setLastName(e.target.value)
                break;
            case "mail":
                setMail(e.target.value)
                break;
            case "age":
                setAge(e.target.value)
                break;
            case "weight":
                setWeight(e.target.value)
                break;
            case "height":
                setHeight(e.target.value)
                break;
        }
    };


    switch (step) {
        case 1:
            return (
                <FormUserDetails
                    nextStep={nextStep}
                    values={values}
                    handleChange={handleChange}
                />
            );
        case 2:
            return (
                <FormPersonalDetails
                    nextStep={nextStep}
                    prevStep={prevStep}
                    values={values}
                    handleChange={handleChange}
                />
            );
    }
}

export default userForm
