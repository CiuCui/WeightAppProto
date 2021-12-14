import React, { useState, useEffect } from 'react'
import FormMovementChallenge from './FormMoveChallenge'
import ConfirmMoveChallenge from './ConfirmMoveChallenge'

const MoveChallengeForm = () => {

    const [step, setStep] = useState(1)
    const [moveType, setMoveType] = useState("")
    const [days, setDays] = useState([])
    const [timesPerDay, setTimesPerDay] = useState("")
    const [distance, setDistance] = useState("")
    const [unit, setUnit] = useState("")
    const [values, setValues] = useState({})


    useEffect(() => {
        setValues({ step, moveType, days, timesPerDay, distance, unit })
    }, [step, moveType, days, timesPerDay, distance, unit])



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
            case "moveType":
                setMoveType(e.target.value);
                break;
            case "days":
                let newDays = days
                if (days.length > 0) {
                    if (days.includes(e.target.name)) {
                        const index = newDays.indexOf(e.target.name)
                        if (index > -1) {
                            newDays.splice(index, 1);
                        }
                        setDays(newDays)
                    }
                    else {
                        newDays.push(e.target.name)
                        setDays(newDays)
                    }
                }
                else {
                    newDays.push(e.target.name)
                    setDays(newDays)
                }
                break;
            case "timesPerDay":
                setTimesPerDay(e.target.value)
                break;
            case "distance":
                setDistance(e.target.value)
                break;
            case "unit":
                setUnit(e.target.value)
                break;





        }
    };


    switch (step) {
        case 1:
            return (
                <FormMovementChallenge
                    nextStep={nextStep}
                    values={values}
                    handleChange={handleChange}
                />
            );
        case 2:
            return (
                <ConfirmMoveChallenge
                    prevStep={prevStep}
                    values={values}
                />
            );
    }
}

export default MoveChallengeForm
