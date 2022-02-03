import React, {useState, useEffect } from 'react';
import personalStyles from '../styles/Personal.module.css';
import {gsap} from 'gsap';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import FormHeader from './FormHeader';
import { FormControl, Select, MenuItem, InputLabel, Button, TextField, Alert } from '@mui/material';

const FormUserDetails = ({ nextStep, values, handleChange }) => {

    useEffect(() =>{
        var gTimeline = gsap.timeline()
        .from("#gTitle", {y:30, duration: 0.5, opacity: 0})
        .from(".question1", {y:20, duration: 0.2, opacity: 0}, "-=0.4")
        .from(".question2", {y:20, duration: 0.2, opacity: 0}, "-=0.36")
        .from(".question3", {y:20, duration: 0.2, opacity: 0}, "-=0.32")
        .from(".question4", {y:20, duration: 0.2, opacity: 0}, "-=0.28")
        .from("#gBtns", {y:20, duration: 0.2, opacity: 0}, "-=0.24")
    }, [])
    
    const continueToNextStep = e => {
        e.preventDefault();
    }

    // GEschlecht einfügen

    return (
        <>
            <div className={personalStyles.container}>

                <div className={personalStyles.main}>
                    <div id='gTitle' >
                        <FormHeader title="Persönliche Informationen" />
                    </div>

                    <div className={`${personalStyles.section} question1`}>
                        <label> Wie lautet dein Vorname? </label>
                        <TextField
                            className={personalStyles.field}
                            label="Gib bitte deinen Vornamen ein"
                            onChange={e => handleChange("firstName", e)}
                            defaultValue={values.firstName}
                        />
                    </div>

                    <div className={`${personalStyles.section} question2`}>
                        <label> Und dein Nachname? </label>
                        <TextField
                            className={personalStyles.field}
                            label="Gib bitte deinen Nachnamen ein"
                            onChange={e => handleChange("lastName", e)}
                            defaultValue={values.lastName}
                        />
                    </div>

                    <div className={`${personalStyles.section} question3`}>
                        <label> Welches Geschlecht hast du? </label>
                        <FormControl className={personalStyles.field} >
                                <InputLabel id="gender-label">Geschlecht</InputLabel>
                                <Select
                                    labelId="gender-label"
                                    id="gender-select"
                                    value={values.gender}
                                    label="Gender"
                                    onChange={e => handleChange("gender", e)}
                                    defaultValue={"Divers"}
                                >
                                    <MenuItem value={"Weiblich"}>Weiblich</MenuItem>
                                    <MenuItem value={"Männlich"}>Männlich</MenuItem>
                                    <MenuItem value={"Divers"}>Divers</MenuItem>
                                </Select>
                            </FormControl>
                    </div>
                    <div className={`${personalStyles.section} question4`}>
                        <label> Unter welcher Mailadresse können wir dich erreichen? </label>
                        <TextField
                            className={personalStyles.field}
                            label="Gib bitte deine Mailadresse ein"
                            onChange={e => handleChange("mail", e)}
                            defaultValue={values.mail}
                        />
                    </div>

                    <div id='gBtns' className={personalStyles.stepBtn}>
                        <Button className={personalStyles.soloBtn} onClick={nextStep} variant="outlined">Weiter</Button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default FormUserDetails
