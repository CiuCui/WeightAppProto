import React, { useState, useEffect } from 'react';
import FormHeader from './FormHeader';
import challengeStyles from '../styles/Challenge.module.css'
import { Button, Checkbox, TextField, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputLabel, MenuItem, RadioGroup, Radio, Select, Slider } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';



const FormMovementChallenge = ({ values, nextStep, handleChange, handleChangeTimes }) => {

    const answerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [montag, setMontag] = useState(false)
    const [dienstag, setDienstag] = useState(false)
    const [mittwoch, setMittwoch] = useState(false)
    const [donnerstag, setDonnerstag] = useState(false)
    const [freitag, setFreitag] = useState(false)
    const [samstag, setSamstag] = useState(false)
    const [sonntag, setSonntag] = useState(false)
    const [sortedDays, setSortedDays] = useState([])

    function valuetext(value) {
        return `${value/20}`;
      }
      
    useEffect(() => {
        const isDaySelected = (day) => {
            if (values.days) {
                return values.days.includes(day)
            }
            else
                return false
        }
        setMontag(isDaySelected("Montag"))
        setDienstag(isDaySelected("Dienstag"))
        setMittwoch(isDaySelected("Mittwoch"))
        setDonnerstag(isDaySelected("Donnerstag"))
        setFreitag(isDaySelected("Freitag"))
        setSamstag(isDaySelected("Samstag"))
        setSonntag(isDaySelected("Sonntag"))
    }, [values.days])

    useEffect(() => {
        setSortedDays(sortDays(values.days))
        console.log(sortedDays)
    }, [montag, dienstag, mittwoch, donnerstag, freitag, samstag, sonntag])

    const toggleDay = (day, e) => {
        handleChange("days", e)
        switch (day) {
            case "Montag":
                setMontag(!montag)
                break;
            case "Dienstag":
                setDienstag(!dienstag)
                break;
            case "Mittwoch":
                setMittwoch(!mittwoch)
                break;
            case "Donnerstag":
                setDonnerstag(!donnerstag)
                break;
            case "Freitag":
                setFreitag(!freitag)
                break;
            case "Samstag":
                setSamstag(!samstag)
                break;
            case "Sonntag":
                setSonntag(!sonntag)
                break;
        }

    }

    const sortDays = (unsortedDays) => {
        let sortedDays = []
        console.log("unsorted", unsortedDays)
        if (unsortedDays) {
            if (unsortedDays.includes("Montag")) {
                sortedDays.push("Montag")
            }
            if (unsortedDays.includes("Dienstag")) {
                sortedDays.push("Dienstag")
            }
            if (unsortedDays.includes("Mittwoch")) {
                sortedDays.push("Mittwoch")
            }
            if (unsortedDays.includes("Donnerstag")) {
                sortedDays.push("Donnerstag")
            }
            if (unsortedDays.includes("Freitag")) {
                sortedDays.push("Freitag")
            }
            if (unsortedDays.includes("Samstag")) {
                sortedDays.push("Samstag")
            }
            if (unsortedDays.includes("Sonntag")) {
                sortedDays.push("Sonntag")
            }

        }
        return sortedDays
    }


    const nextStepHelp = () => {
        checkInput()
        nextStep()
    }
    const checkInput = () => {
        console.log("check")

        if(values.moveType){
           

            switch (values.moveType) {
                case "Laufen": 
                    if(values.distance && isNaN(values.distance)){
                        alert("Bitte Zahl eingeben.")
                        break;
                    }
                    let dist = parseInt(values.distance)
                    if(values.unit=="km" && (dist < 1 || dist >= 20)){
                        alert("Bist du sicher, dass du diese Strecke realistisch ist?")
                        break;
                    }
                    if(values.unit== "m" && (dist < 1000 || dist >= 20000)){
                        alert("Bist du sicher, dass du diese Strecke realistisch ist?")
                        break;
                    }
                    if(values.unit== "h" && (dist < 0 || dist >= 2)){
                        alert("Bist du sicher, dass du diese Dauer realistisch ist?")
                        break;
                    }
                    if(values.unit== "min" && (dist < 10 || dist >= 90)){
                        alert("Bist du sicher, dass du diese Dauer realistisch ist?")
                        break;
                    }
                    break;
                case "Spazieren gehen": 
                    if(values.distance && isNaN(values.distance)){
                        alert("Bitte Zahl eingeben.")
                        break;
                    }
                    let dist = parseInt(values.distance)
                    if(values.unit=="km" && (dist < 1 || dist >= 20)){
                        alert("Bist du sicher, dass du diese Strecke realistisch ist?")
                        break;
                    }
                    if(values.unit== "m" && (dist < 1000 || dist >= 20000)){
                        alert("Bist du sicher, dass du diese Strecke realistisch ist?")
                        break;
                    }
                    if(values.unit== "h" && (dist < 0 || dist >= 2)){
                        alert("Bist du sicher, dass du diese Dauer realistisch ist?")
                        break;
                    }
                    if(values.unit== "min" && (dist < 10 || dist >= 90)){
                        alert("Bist du sicher, dass du diese Dauer realistisch ist?")
                        break;
                    }
                    break;
                case "Schwimmen": 
                    if(values.distance && isNaN(values.distance)){
                        alert("Bitte Zahl eingeben.")
                        break;
                    }
                    let dist = parseInt(values.distance)
                    if(values.unit=="km" && (dist < 1 || dist >= 20)){
                        alert("Bist du sicher, dass du diese Strecke realistisch ist?")
                        break;
                    }
                    if(values.unit== "m" && (dist < 1000 || dist >= 20000)){
                        alert("Bist du sicher, dass du diese Strecke realistisch ist?")
                        break;
                    }
                    if(values.unit== "h" && (dist < 0 || dist >= 2)){
                        alert("Bist du sicher, dass du diese Dauer realistisch ist?")
                        break;
                    }
                    if(values.unit== "min" && (dist < 10 || dist >= 90)){
                        alert("Bist du sicher, dass du diese Dauer realistisch ist?")
                        break;
                    }
                    break;
                case "Radfahren": 
                    if(values.distance && isNaN(values.distance)){
                        alert("Bitte Zahl eingeben.")
                        break;
                    }
                    let dist = parseInt(values.distance)
                    if(values.unit=="km" && (dist < 1 || dist >= 20)){
                        alert("Bist du sicher, dass du diese Strecke realistisch ist?")
                        break;
                    }
                    if(values.unit== "m" && (dist < 1000 || dist >= 20000)){
                        alert("Bist du sicher, dass du diese Strecke realistisch ist?")
                        break;
                    }
                    if(values.unit== "h" && (dist < 0 || dist >= 2)){
                        alert("Bist du sicher, dass du diese Dauer realistisch ist?")
                        break;
                    }
                    if(values.unit== "min" && (dist < 10 || dist >= 90)){
                        alert("Bist du sicher, dass du diese Dauer realistisch ist?")
                        break;
                    }
                    break;
                case "Workout": 
                    if(values.distance && isNaN(values.distance)){
                        alert("Bitte Zahl eingeben.")
                        break;
                    }
                    let dist = parseInt(values.distance)
                    if(values.unit=="km" || values.unit == "m"){
                        alert("Eine Streckenangabe ist nicht passend.")
                        break;
                    }
                    if(values.unit== "h" && (dist < 0 || dist >= 2)){
                        alert("Bist du sicher, dass du diese Dauer realistisch ist?")
                        break;
                    }
                    if(values.unit== "min" && (dist < 10 || dist >= 90)){
                        alert("Bist du sicher, dass du diese Dauer realistisch ist?")
                        break;
                    }
                    break;
                case "Yoga": 
                    if(values.distance && isNaN(values.distance)){
                        alert("Bitte Zahl eingeben.")
                        break;
                    }
                    let dist = parseInt(values.distance)
                    if(values.unit=="km" || values.unit == "m"){
                        alert("Eine Streckenangabe ist nicht passend.")
                        break;
                    }
                    if(values.unit== "h" && (dist < 0 || dist >= 2)){
                        alert("Bist du sicher, dass du diese Dauer realistisch ist?")
                        break;
                    }
                    if(values.unit== "min" && (dist < 10 || dist >= 90)){
                        alert("Bist du sicher, dass du diese Dauer realistisch ist?")
                        break;
                    }
                    break;
            }
        }
        
    }

    return (
        <>
            <div className={challengeStyles.container}>

                <div className={challengeStyles.main}>
                    <FormHeader title="Bewegungs-Challenge erstellen" />

                    <div className={challengeStyles.section}>
                        <label> Wie möchtest du dich bewegen? </label>
                        <FormControl className={challengeStyles.fieldFull} >
                                <InputLabel id="moveType-movement-label">Bewegungsform</InputLabel>
                                <Select
                                    labelId="moveType-movement-label"
                                    id="moveType-select"
                                    value={values.type}
                                    label="MoveType"
                                    onChange={e => handleChange("moveType", e)}
                                    defaultValue={values.moveType ? values.moveType : "Laufen"}
                                >
                                    <MenuItem value={"Laufen"}>Laufen</MenuItem>
                                    <MenuItem value={"Spazieren gehen"}>Spazieren gehen</MenuItem>
                                    <MenuItem value={"Radfahren"}>Radfahren</MenuItem>
                                    <MenuItem value={"Schwimmen"}>Schwimmen</MenuItem>
                                    <MenuItem value={"Workout"}>Workout</MenuItem>
                                    <MenuItem value={"Yoga"}>Yoga</MenuItem>
                                    <MenuItem value={"Anderes"}>Anderes</MenuItem>


                                </Select>
                            </FormControl>
                    </div>

                    <div className={challengeStyles.section}>
                        <label> An welchen Tagen möchtest du dich bewegen? </label>
                        <FormGroup className={challengeStyles.checkboxes}>
                            <FormControlLabel onChange={e => toggleDay("Montag", e)} checked={montag} control={<Checkbox name="Montag" />} label="Montag" />
                            <FormControlLabel onChange={e => toggleDay("Dienstag", e)} checked={dienstag} control={<Checkbox name="Dienstag" />} label="Dienstag" />
                            <FormControlLabel onChange={e => toggleDay("Mittwoch", e)} checked={mittwoch} control={<Checkbox name="Mittwoch" />} label="Mittwoch" />
                            <FormControlLabel onChange={e => toggleDay("Donnerstag", e)} checked={donnerstag} control={<Checkbox name="Donnerstag" />} label="Donnerstag" />
                            <FormControlLabel onChange={e => toggleDay("Freitag", e)} checked={freitag} control={<Checkbox name="Freitag" />} label="Freitag" />
                            <FormControlLabel onChange={e => toggleDay("Samstag", e)} checked={samstag} control={<Checkbox name="Samstag" />} label="Samstag" />
                            <FormControlLabel onChange={e => toggleDay("Sonntag", e)} checked={sonntag} control={<Checkbox name="Sonntag" />} label="Sonntag" />
                        </FormGroup>
                    </div>

                    <div className={challengeStyles.slider}>
                        <label> Wie häufig am Tag möchtest du dich bewegen? </label>
                        <FormControl component="fieldset">
                            <div className={challengeStyles.sliderd}>
                            <FormLabel component="legend"> Häufigkeit</FormLabel>
                            
                                <Slider
                                    aria-label="Häufigkeit"
                                    onChange={e => handleChange("timesPerDay", e)}
                                    defaultValue={0}
                                    value={values.timesPerDay * 20}
                                    getAriaValueText={valuetext}
                                    step={20}
                                    valueLabelDisplay="off"
                                    marks={[{value:0, label:0},{value:20, label:1},{value:40, label:2},{value:60, label:3}, {value:80, label:4}, {value:100, label:5}]}
                                    />
                            </div>
                        </FormControl>
                    </div>

                    <div className={challengeStyles.section}>
                        <label> Wie oft/weit/lange möchtest du dich bewegen ... pro Aktivität? </label>
                        <FormControl className={challengeStyles.fieldContainer}>
                            <TextField
                                className={challengeStyles.fieldHalf}
                                label="Distanz"
                                onChange={e => handleChange("distance", e)}
                                defaultValue={values.distance}
                            />
                            <FormControl className={challengeStyles.fieldHalf} >
                                <InputLabel id="unit-movement-label">Einheit</InputLabel>
                                <Select
                                    labelId="unit-movement-label"
                                    id="unit-select"
                                    value={values.unit}
                                    label="Unit"
                                    onChange={e => handleChange("unit", e)}
                                    defaultValue={values.unit ? values.unit : "km"}
                                >
                                    <MenuItem value={"km"}>Kilometer</MenuItem>
                                    <MenuItem value={"m"}>Meter</MenuItem>
                                    <MenuItem value={"min"}>Minuten</MenuItem>
                                    <MenuItem value={"h"}>Stunden</MenuItem>
                                </Select>
                            </FormControl>
                        </FormControl>
                    </div>

                    <div className={challengeStyles.section}>
                        {values.days && values.days.length > 0

                            ? <>
                                <label> Zu welcher Uhrzeit? </label>
                                <div className={challengeStyles.overview}>
                                    <Grid container spacing={2}>

                                        {
                                            sortedDays.map((day) => (
                                                <React.Fragment key={day}>
                                                    <Grid item xs={4} className={challengeStyles.overviewItem}>
                                                        <label>{day}:</label>
                                                    </Grid>
                                                    <Grid item xs={4} className={challengeStyles.overviewItem}>
                                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                            <TimePicker
                                                                ampm={false}
                                                                value={values.times[day]["time"]}
                                                                onChange={(newValue, e) => handleChangeTimes("time", day, newValue, e)}
                                                                renderInput={(params) => <TextField {...params} />} />
                                                        </LocalizationProvider>
                                                    </Grid>
                                                    <Grid item xs={4} className={challengeStyles.overviewItem}>
                                                        <TextField
                                                            className={challengeStyles.overviewItem}
                                                            label="Ort"
                                                            onChange={e => handleChangeTimes("place", day, "", e)}
                                                            defaultValue={values.times[day]["place"]}
                                                        />
                                                    </Grid>
                                                </React.Fragment>
                                            ))
                                        }
                                    </Grid>
                                </div>
                            </>
                            : <> </>
                        }

                    </div>

                    <div className={challengeStyles.stepBtn}>
                        <Button onClick={nextStepHelp} variant="outlined">Weiter</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormMovementChallenge
