import React from 'react'
import FormHeader from './FormHeader'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Button } from '@mui/material'
import goalStyles from '../styles/Goal.module.css'

const FormSelfEfficacy = ({ values, handleChange, nextStep, prevStep }) => {
    const answerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div className={goalStyles.container}>
            <div className={goalStyles.main}>
                <FormHeader title="Selbstwirksamkeit" />


                <div className={goalStyles.section}>
                    <label> Wie sicher bist du, dieses Ziel zu erreichen?</label>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Erfolgserwartung</FormLabel>
                        <RadioGroup row aria-label="selfEfficacyRadioGroup" value={values.selfEfficacy} name="selfEfficacy-radioGroup" onChange={e => handleChange("selfEfficacy", e)}>
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

export default FormSelfEfficacy
