import React from 'react'
import goalStyles from '../styles/Goal.module.css'
import FormHeader from './FormHeader'
import { TextField, Button } from '@mui/material'

const FormGoalSetting = ({ values, handleChange, prevStep, nextStep }) => {
    return (
        <div className={goalStyles.container}>
            <div className={goalStyles.main}>
                <FormHeader title="Ziele setzen" />

                <div className={goalStyles.section}>
                    <label>Welches Ziel möchtest du erreichen? Versuche es bitte möglichst konkret zu beschreiben.</label>
                    <TextField
                        className={goalStyles.field}
                        label="Welches Ziel möchtest du erreichen?"
                        onChange={e => handleChange("goal", e)}
                        defaultValue={values.goal}
                        multiline
                    />
                </div>

                <div className={goalStyles.stepBtn}>
                    <Button onClick={prevStep} variant="outlined">Previous</Button>
                    <Button onClick={nextStep} variant="outlined">Next</Button>
                </div>
            </div>
        </div>
    )
}

export default FormGoalSetting
