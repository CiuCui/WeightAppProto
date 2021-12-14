import React from 'react'
import goalStyles from '../styles/Goal.module.css'
import FormHeader from './FormHeader'
import { TextField, Button } from '@mui/material'

const FormGoalSetting = ({ values, handleChange, prevStep, nextStep }) => {
    return (
        <div className={goalStyles.container}>
            <div className={goalStyles.main}>
                <FormHeader title="Ziele setzen" />
                <TextField
                    className={goalStyles.field}
                    label="Welches Ziel möchtest du erreichen?"
                    onChange={e => handleChange("goal", e)}
                    defaultValue={values.goal}
                    multiline
                />
                <div className={goalStyles.stepBtn}>
                    <Button onClick={prevStep} variant="outlined">Previous</Button>
                    <Button onClick={nextStep} variant="outlined">Next</Button>
                </div>
            </div>
        </div>
    )
}

export default FormGoalSetting
