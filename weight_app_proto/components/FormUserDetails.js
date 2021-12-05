import React from 'react';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FormUserDetails = (values, handleChange) => {


    const continueToNextStep = e => {
        e.preventDefault();
    }



    return (
        <>
            <TextField
                label="Enter your First Name"
                onChange={() => handleChange("firstName")}
            />
            <TextField
                label="Enter your Last Name"
                onChange={() => handleChange("lastName")}
            />
        </>
    )
}

export default FormUserDetails
