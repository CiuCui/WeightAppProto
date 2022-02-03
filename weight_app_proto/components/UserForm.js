import React, { useState, useEffect } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormConfirm from './FormConfirm';
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../contexts/userContext';



const userForm = () => {

    const id = React.useContext(UserContext); 

    const [step, setStep] = useState(1)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mail, setMail] = useState("")
    const [gender, setGender] = useState("")
    const [age, setAge] = useState("")
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [values, setValues] = useState({})




    useEffect(() => {
        setValues({ step, firstName, lastName, mail, age, weight, height, id, gender})
    }, [step, firstName, lastName, mail, age, weight, height, id, gender])


    // Proceed to next step
    const nextStep = () => {
        
        if(values.step < 2){
            setStep(step +1)
        }
        else{
            if(checkData()){
                setStep(step + 1)
            }
        }
        
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


    const checkData = () => {
        let weight = parseInt(values.weight)
        if(values.weight !=="" && (typeof(weight)!== "number" ||  weight < 30 || weight > 500) ){
            alert("Gewichtsangabe ist keine Zahl oder unrealistisch. Angabe in kg.")
            return false
        }
        if(values.mail !== "" && !values.mail.includes("@")){
            alert("Eine Mailadresse soltle ein @-Zeichen beinhalten.")
            return false
        }
        let height = parseInt(values.height)
        if(values.height !== "" && (typeof(weight)!== "number" || height < 120 || height > 230)){
            alert("Größenangabe ist keine Zahl oder unrealistisch. Angabe in cm.")
            return false
        }
        let age = parseInt(values.age)
        if(values.age !== "" && (typeof(age)!== "number" || age < 5 || age > 100)){
            alert("Altersangabe ist keine Zahl oder unrealistisch. Angabe in Jahren.")
            return false
        }
        else{
            return true
        }
    }

    // Handle fields change
    const handleChange = (input, e) => {
        switch (input) {
            case "firstName":
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
            case "gender":
                setGender(e.target.value)
                break;
        }
    };

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/userDetails')
        const data = await res.json()

        return data
    }

    const addInfo = async (userDetails) => {
        delete userDetails["step"]
        const res = await fetch('http://localhost:5000/userDetails', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userDetails),
        })

        const data = await res.json()

    }

    const confirm = async () => {
        addInfo(values)

        alert("Confirmation")
    }

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
        case 3:
            return (
                <FormConfirm
                    prevStep={prevStep}
                    values={values}
                    confirm={confirm}
                />
            );
    }
}

export default userForm
