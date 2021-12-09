import React from 'react'
import FormHeader from './FormHeader'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Button } from '@mui/material'
import goalStyles from '../styles/Goal.module.css'

const FormSelfEfficacy = ({ values, handleChange, nextStep, prevStep }) => {
    const answerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div className={goalStyles.container}>
            <div className={goalStyles.main}>
                <FormHeader title="Self-Efficacy" />
                <FormControl component="fieldset">
                    <FormLabel component="legend">Erfolgswahrscheinlichkeit</FormLabel>
                    <RadioGroup row aria-label="selfEfficacyRadioGroup" defaultValue={values.selfEfficacy} name="selfEfficacy-radioGroup" onChange={e => handleChange("selfEfficacy", e)}>
                        {answerArray.map((answer) => {
                            return <FormControlLabel key={answer} value={answer} control={<Radio />} label={answer} />
                        })}
                    </RadioGroup>
                </FormControl>
                <div className={goalStyles.stepBtn}>
                    <Button onClick={prevStep} variant="outlined">Previous</Button>
                    <Button onClick={nextStep} variant="outlined">Next</Button>
                </div>
            </div>
        </div>
    )
}

export default FormSelfEfficacy
