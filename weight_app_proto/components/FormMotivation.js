import React from 'react'
import FormHeader from './FormHeader'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Button } from '@mui/material'
import goalStyles from '../styles/Goal.module.css'

const FormMotivation = ({ values, handleChange, nextStep, prevStep }) => {
    const answerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div className={goalStyles.container}>
            <div className={goalStyles.main}>
                <FormHeader title="Motivation" />

                <div className={goalStyles.section}>
                    <label> Wie hoch ist deine Motivation dieses Ziel zu erreichen? </label>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Motivation</FormLabel>

                        <RadioGroup row aria-label="motivationRadioGroup" value={values.motivation} name="row-radio-buttons-group" onChange={e => handleChange("motivation", e)}>
                            {answerArray.map((answer) => {
                                return <FormControlLabel key={answer} value={answer} control={<Radio />} label={answer} />
                            })}
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className={goalStyles.stepBtn}>
                    <Button onClick={prevStep} variant="outlined">Zurück</Button>
                    <Button onClick={nextStep} variant="outlined">Weiter</Button>
                </div>
            </div>
        </div>
    )
}

export default FormMotivation
