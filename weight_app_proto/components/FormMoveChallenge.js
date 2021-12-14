import React, { useState, useEffect } from 'react';
import FormHeader from './FormHeader';
import challengeStyles from '../styles/Challenge.module.css'
import { Button, Checkbox, TextField, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, RadioGroup, Radio, Select } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';



const FormMovementChallenge = ({ values, nextStep, handleChange }) => {

    const answerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [montag, setMontag] = useState(false)
    const [dienstag, setDienstag] = useState(false)
    const [mittwoch, setMittwoch] = useState(false)
    const [donnerstag, setDonnerstag] = useState(false)
    const [freitag, setFreitag] = useState(false)
    const [samstag, setSamstag] = useState(false)
    const [sonntag, setSonntag] = useState(false)
    const [time, setTime] = useState("")

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
    }, [])



    return (
        <>
            <div className={challengeStyles.container}>

                <div className={challengeStyles.main}>
                    <FormHeader title="Bewegungs-Challenge erstellen" />
                    <label> Wie möchtest du dich bewegen? </label>
                    <TextField
                        className={challengeStyles.field}
                        label="Bewegungsart"
                        onChange={e => handleChange("moveType", e)}
                        defaultValue={values.moveType}
                    />
                    <label> An welchen Tagen möchtest du dich bewegen? </label>
                    <FormGroup className={challengeStyles.checkboxes}>
                        <FormControlLabel onChange={e => { handleChange("days", e), setMontag(true) }} checked={montag} control={<Checkbox name="Montag" />} label="Montag" />
                        <FormControlLabel onChange={e => { handleChange("days", e), setDienstag(true) }} checked={dienstag} control={<Checkbox name="Dienstag" />} label="Dienstag" />
                        <FormControlLabel onChange={e => { handleChange("days", e), setMittwoch(true) }} checked={mittwoch} control={<Checkbox name="Mittwoch" />} label="Mittwoch" />
                        <FormControlLabel onChange={e => { handleChange("days", e), setDonnerstag(true) }} checked={donnerstag} control={<Checkbox name="Donnerstag" />} label="Donnerstag" />
                        <FormControlLabel onChange={e => { handleChange("days", e), setFreitag(true) }} checked={freitag} control={<Checkbox name="Freitag" />} label="Freitag" />
                        <FormControlLabel onChange={e => { handleChange("days", e), setSamstag(true) }} checked={samstag} control={<Checkbox name="Samstag" />} label="Samstag" />
                        <FormControlLabel onChange={e => { handleChange("days", e), setSonntag(true) }} checked={sonntag} control={<Checkbox name="Sonntag" />} label="Sonntag" />
                    </FormGroup>
                    <label> Wie häufig am Tag möchtest du dich bewegen? </label>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"> Häufigkeit</FormLabel>
                        <RadioGroup row aria-label="haeufigkeitRadioGroup" value={values.timesPerDay} name="haeufigkeit-radioGroup" onChange={e => handleChange("timesPerDay", e)}>
                            {answerArray.map((answer) => {
                                return <FormControlLabel key={answer} control={<Radio value={answer} />} label={answer} />
                            })}
                        </RadioGroup>
                    </FormControl>
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
                    <label> Zu welcher Uhrzeit? </label>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <TimePicker
                            ampm={false}
                            value={time}
                            onChange={newValue => setTime(newValue)}
                            renderInput={(params) => <TextField {...params} />} />
                    </LocalizationProvider>
                    <div className={challengeStyles.stepBtn}>
                        <Button onClick={nextStep} variant="outlined">Weiter</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormMovementChallenge
