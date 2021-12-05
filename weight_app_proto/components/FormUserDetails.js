import React from 'react';
import personalStyles from '../styles/Personal.module.css'

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FormUserDetails = ({ nextStep, values, handleChange }) => {


    const continueToNextStep = e => {
        e.preventDefault();
    }



    return (
        <>
            <div className={personalStyles.main}>
                <TextField
                    className={personalStyles.field}
                    label="Enter your First Name"
                    onChange={e => handleChange("firstName", e)}
                    defaultValue={values.firstName}
                />
                <TextField
                    className={personalStyles.field}
                    label="Enter your Last Name"
                    onChange={e => handleChange("lastName", e)}
                    defaultValue={values.lastName}
                />
                <TextField
                    className={personalStyles.field}
                    label="Enter your mail"
                    onChange={e => handleChange("mail", e)}
                    defaultValue={values.mail}
                />
                <Button onClick={nextStep} variant="outlined">Next</Button>
            </div>

        </>
    )
}

export default FormUserDetails
