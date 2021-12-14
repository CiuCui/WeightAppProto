import React, { useState, useEffect } from 'react'
import FormHeader from './FormHeader'
import FormGoalSetting from './FormGoalSetting'
import FormSelfEfficacy from './FormSelfEfficacy'
import FormMotivation from './FormMotivation'
import FormGoalConfirm from './ConfirmGoal'
import { v4 as uuidv4 } from 'uuid';

const FormGoals = () => {

    const [step, setStep] = useState(1)
    const [goal, setGoal] = useState("")
    const [selfEfficacy, setSelfEfficacy] = useState(" ")
    const [motivation, setMotivation] = useState(" ")
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

    const handleChange = (input, e) => {
        switch (input) {
            case "goal":
                setGoal(e.target.value);
                break;
            case "selfEfficacy":
                setSelfEfficacy(e.target.value)
                break;
            case "motivation":
                setMotivation(e.target.value)
        }
    };

    const addGoal = async (userGoal) => {
        delete userGoal["step"]
        const generatedId = uuidv4();
        const userId = generatedId
        userGoal = { ...userGoal, id: userId }
        const res = await fetch('http://localhost:5000/userGoal', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userGoal),
        })

        const data = await res.json()

    }

    const confirm = async () => {
        addGoal(values)

        alert("Confirmation")
    }


    useEffect(() => {
        setValues({ step, goal, selfEfficacy, motivation })
    }, [step, goal, selfEfficacy, motivation])


    switch (step) {
        case 1:
            return (
                <FormGoalSetting
                    nextStep={nextStep}
                    values={values}
                    handleChange={handleChange}
                />
            );
        case 2:
            return (
                <FormSelfEfficacy
                    prevStep={prevStep}
                    nextStep={nextStep}
                    values={values}
                    handleChange={handleChange}

                />
            );
        case 3:
            return (
                <FormMotivation
                    prevStep={prevStep}
                    nextStep={nextStep}
                    values={values}
                    handleChange={handleChange}

                />
            );
        case 4:
            return (
                <FormGoalConfirm
                    prevStep={prevStep}
                    values={values}
                    confirm={confirm}
                />
            )


    }
}

export default FormGoals
