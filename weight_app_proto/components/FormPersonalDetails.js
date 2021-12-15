import React from 'react'
import FormHeader from './FormHeader';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import personalStyles from '../styles/Personal.module.css'



const FormPersonalDetails = ({ nextStep, prevStep, values, handleChange }) => {


    return (
        <>
            <div className={personalStyles.container}>

                <div className={personalStyles.main}>
                    <FormHeader title="Persönliche Daten" />

                    <div className={personalStyles.section}>
                        <label> Wie alt bist du? </label>
                        <TextField
                            className={personalStyles.field}
                            label="Alter in Jahren"
                            onChange={e => handleChange("age", e)}
                            defaultValue={values.age}
                        />
                    </div>

                    <div className={personalStyles.section}>
                        <label> Stelle dich doch mal bitte auf eine Waage und verate uns wie viel du wiegst. </label>
                        <TextField
                            className={personalStyles.field}
                            label="Gewicht in kg"
                            onChange={e => handleChange("weight", e)}
                            defaultValue={values.weight}
                        />
                    </div>

                    <div className={personalStyles.section}>
                        <label> Und dann benötigen wir noch deine Größe. </label>
                        <TextField
                            className={personalStyles.field}
                            label="Größe in cm"
                            onChange={e => handleChange("height", e)}
                            defaultValue={values.height}
                        />
                    </div>

                    <div className={personalStyles.stepBtn}>
                        <Button onClick={prevStep} variant="outlined">Zurück</Button>
                        <Button onClick={nextStep} variant="outlined">Weiter</Button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FormPersonalDetails
