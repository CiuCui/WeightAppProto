import React, { useState, useEffect } from 'react';
import FormHeader from './FormHeader';
import challengeStyles from '../styles/Challenge.module.css'
import { Button, Checkbox, TextField, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputLabel, MenuItem, RadioGroup, Radio, Select } from '@mui/material'
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

    return (
        <>
            <div className={challengeStyles.container}>

                <div className={challengeStyles.main}>
                    <FormHeader title="Bewegungs-Challenge erstellen" />

                    <div className={challengeStyles.section}>
                        <label> Wie möchtest du dich bewegen? </label>
                        <TextField
                            className={challengeStyles.field}
                            label="Bewegungsart"
                            onChange={e => handleChange("moveType", e)}
                            defaultValue={values.moveType}
                        />
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

                    <div className={challengeStyles.section}>
                        <label> Wie häufig am Tag möchtest du dich bewegen? </label>
                        <FormControl component="fieldset">
                            <FormLabel component="legend"> Häufigkeit</FormLabel>
                            <RadioGroup row aria-label="haeufigkeitRadioGroup" value={values.timesPerDay} name="haeufigkeit-radioGroup" onChange={e => handleChange("timesPerDay", e)}>
                                {answerArray.map((answer) => {
                                    return <FormControlLabel key={answer} control={<Radio value={answer} />} label={answer} />
                                })}
                            </RadioGroup>
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
                        <Button onClick={nextStep} variant="outlined">Weiter</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormMovementChallenge
