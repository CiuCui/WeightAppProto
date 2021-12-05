import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import personalStyles from '../styles/Personal.module.css'



const FormPersonalDetails = ({ nextStep, prevStep, values, handleChange }) => {


    return (
        <>
            <div className={personalStyles.main}>
                <TextField
                    className={personalStyles.field}
                    label="Enter your Age"
                    onChange={e => handleChange("age", e)}
                    defaultValue={values.age}
                />
                <TextField
                    className={personalStyles.field}
                    label="Enter your weight"
                    onChange={e => handleChange("weight", e)}
                    defaultValue={values.weight}
                />
                <TextField
                    className={personalStyles.field}
                    label="Enter your height"
                    onChange={e => handleChange("height", e)}
                    defaultValue={values.height}
                />
                <div className={personalStyles.stepBtn}>
                    <Button onClick={prevStep} variant="outlined">Previous</Button>
                    <Button onClick={nextStep} variant="outlined">Next</Button>
                </div>

            </div>
            <Button />
        </>
    )
}

export default FormPersonalDetails
