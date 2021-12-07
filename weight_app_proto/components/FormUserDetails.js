import React from 'react';
import personalStyles from '../styles/Personal.module.css'

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormHeader from './FormHeader';

const FormUserDetails = ({ nextStep, values, handleChange }) => {


    const continueToNextStep = e => {
        e.preventDefault();
    }



    return (
        <>
            <div className={personalStyles.container}>

                <div className={personalStyles.main}>
                    <FormHeader title="User Details" />
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
                    <div className={personalStyles.stepBtn}>
                        <Button className={personalStyles.soloBtn} onClick={nextStep} variant="outlined">Next</Button>
                    </div>
                    <Alert className={personalStyles.alert} severity="info">This is an info alert — check it out!</Alert>
                </div>
            </div>
        </>
    )
}

export default FormUserDetails
