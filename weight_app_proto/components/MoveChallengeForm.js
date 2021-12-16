import React, { useState, useEffect } from 'react'
import FormMovementChallenge from './FormMoveChallenge'
import ConfirmMoveChallenge from './ConfirmMoveChallenge'
import { UserContext } from '../contexts/userContext';
import { add } from 'date-fns';

const MoveChallengeForm = () => {

    const id = React.useContext(UserContext);

    const [step, setStep] = useState(1)
    const [moveType, setMoveType] = useState("")
    const [days, setDays] = useState([])
    const [timesPerDay, setTimesPerDay] = useState("")
    const [distance, setDistance] = useState("")
    const [unit, setUnit] = useState("")
    const [times, setTimes] = useState({
        "Montag": { time: "", place: "" },
        "Dienstag": { time: "", place: "" },
        "Mittwoch": { time: "", place: "" },
        "Donnerstag": { time: "", place: "" },
        "Freitag": { time: "", place: "" },
        "Samstag": { time: "", place: "" },
        "Sonntag": { time: "", place: "" }
    })
    const [values, setValues] = useState({})


    useEffect(() => {
        setValues({ step, moveType, days, timesPerDay, distance, unit, times, id})
    }, [step, moveType, days, timesPerDay, distance, unit, times, id])



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
                            console.log("new ", newDays)
                        }
                        setDays(newDays)
                    }
                    else {
                        if(values.days.length >= 4){
                            alert("Mehr als 4 Sporteinheiten pro Woche ist schon ziemlich. Natürlich kannst du es gerne versuchen, aber überlege dir, ob du das wirklich umsetzen kannst.")
                        }
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
                if(e.target.value >= 4){
                    alert("Mehr als 3 Sporteinheiten pro Tag ist schon ziemlich. Natürlich kannst du es gerne versuchen, aber überlege dir, ob du das wirklich umsetzen kannst.")
                }
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

    const handleChangeTimes = (input, day, newValue, e) => {
        switch (input) {
            case "time":
                setTimes({ ...times, [day]: { ...times[day], time: newValue } })
                break;
            case "place":
                setTimes({ ...times, [day]: { ...times[day], place: e.target.value } })
                break;
        }
    }

    const addChallenge = async (valChallenge) => {
        let challenge = valChallenge
        delete challenge["step"]
        challenge["MondayTime"] = values.times.Montag.time
        challenge["MondayPlace"] = values.times.Montag.place
        challenge["TuesdayTime"] = values.times.Dienstag.time
        challenge["TuesdayPlace"] = values.times.Dienstag.place
        challenge["WednesdayTime"] = values.times.Mittwoch.time
        challenge["WednesdayPlace"] = values.times.Mittwoch.place
        challenge["ThursdayTime"] = values.times.Donnerstag.time
        challenge["ThursdayPlace"] = values.times.Donnerstag.place
        challenge["FridayTime"] = values.times.Freitag.time
        challenge["FridayPlace"] = values.times.Freitag.place
        challenge["SaturdayTime"] = values.times.Samstag.time
        challenge["SaturdayPlace"] = values.times.Samstag.place
        challenge["SundayTime"] = values.times.Sonntag.time
        challenge["SundayPlace"] = values.times.Sonntag.place

        challenge["days"] = challenge.days.length
        delete challenge["times"]
        const res = await fetch('http://localhost:5000/moveChallenge', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(challenge),
        })

        const data = await res.json()
    }

    const confirm = () => {
        console.log(values)
        addChallenge(values)
    }



    switch (step) {
        case 1:
            return (
                <FormMovementChallenge
                    nextStep={nextStep}
                    values={values}
                    handleChange={handleChange}
                    handleChangeTimes={handleChangeTimes}
                />
            );
        case 2:
            return (
                <ConfirmMoveChallenge
                    prevStep={prevStep}
                    values={values}
                    confirm={confirm}
                />
            );
    }
}

export default MoveChallengeForm
