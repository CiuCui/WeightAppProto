import React from 'react';
import personalStyles from '../styles/Personal.module.css'

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import FormHeader from './FormHeader';
import { FormControl, Select, MenuItem, InputLabel, Button, TextField, Alert } from '@mui/material';

const FormUserDetails = ({ nextStep, values, handleChange }) => {


    const continueToNextStep = e => {
        e.preventDefault();
    }

    // GEschlecht einfügen

    return (
        <>
            <div className={personalStyles.container}>

                <div className={personalStyles.main}>
                    <FormHeader title="User Details" />

                    <div className={personalStyles.section}>
                        <label> Wie lautet dein Vorname? </label>
                        <TextField
                            className={personalStyles.field}
                            label="Gib bitte deinen Vornamen ein"
                            onChange={e => handleChange("firstName", e)}
                            defaultValue={values.firstName}
                        />
                    </div>

                    <div className={personalStyles.section}>
                        <label> Und dein Nachname? </label>
                        <TextField
                            className={personalStyles.field}
                            label="Gib bitte deinen Nachnamen ein"
                            onChange={e => handleChange("lastName", e)}
                            defaultValue={values.lastName}
                        />
                    </div>

                    <div className={personalStyles.section}>
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
                    <div className={personalStyles.section}>
                        <label> Unter welcher Mailadresse können wir dich erreichen? </label>
                        <TextField
                            className={personalStyles.field}
                            label="Gib bitte deine Mailadresse ein"
                            onChange={e => handleChange("mail", e)}
                            defaultValue={values.mail}
                        />
                    </div>

                    <div className={personalStyles.stepBtn}>
                        <Button className={personalStyles.soloBtn} onClick={nextStep} variant="outlined">Weiter</Button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default FormUserDetails
