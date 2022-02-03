import React, {useEffect} from 'react'
import FormHeader from './FormHeader';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {gsap} from 'gsap';

import personalStyles from '../styles/Personal.module.css'



const FormPersonalDetails = ({ nextStep, prevStep, values, handleChange }) => {



    useEffect(() =>{
        var gTimeline = gsap.timeline()
        .from("#gTitle", {y:30, duration: 0.5, opacity: 0})
        .from(".question1", {y:50, duration: 0.3, opacity: 0}, "-=0.4")
        .from(".question2", {y:50, duration: 0.3, opacity: 0}, "-=0.35")
        .from(".question3", {y:50, duration: 0.3, opacity: 0}, "-=0.3")
        .from(".question4", {y:50, duration: 0.3, opacity: 0}, "-=0.25")
    }, [])


    return (
        <>
            <div className={personalStyles.container}>

                <div className={personalStyles.main}>
                    <div id='gTitle'>
                        <FormHeader title="Persönliche Daten" />    
                    </div>
                    

                    <div className={`${personalStyles.section} question1`}>
                        <label> Wie alt bist du? </label>
                        <TextField
                            className={personalStyles.field}
                            label="Alter in Jahren"
                            onChange={e => handleChange("age", e)}
                            defaultValue={values.age}
                        />
                    </div>

                    <div className={`${personalStyles.section} question2`}>
                        <label> Stelle dich doch mal bitte auf eine Waage und verate uns wie viel du wiegst. </label>
                        <TextField
                            className={personalStyles.field}
                            label="Gewicht in kg"
                            onChange={e => handleChange("weight", e)}
                            defaultValue={values.weight}
                        />
                    </div>

                    <div className={`${personalStyles.section} question3`}>
                        <label> Und dann benötigen wir noch deine Größe. </label>
                        <TextField
                            className={personalStyles.field}
                            label="Größe in cm"
                            onChange={e => handleChange("height", e)}
                            defaultValue={values.height}
                        />
                    </div>

                    <div className={`${personalStyles.stepBtn} question4`}>
                        <Button onClick={prevStep} variant="outlined">Zurück</Button>
                        <Button onClick={nextStep} variant="outlined">Weiter</Button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FormPersonalDetails
