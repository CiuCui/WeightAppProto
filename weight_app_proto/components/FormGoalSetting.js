import React, { useState, useEffect } from 'react'
import goalStyles from '../styles/Goal.module.css'
import FormHeader from './FormHeader'
import { TextField, Button, fabClasses } from '@mui/material'
import {gsap} from 'gsap'
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';



const FormGoalSetting = ({ values, handleChange, prevStep, nextStep }) => {

    const [quest, setQuest] = useState(0)

    useEffect(() => {
        var gTimeline = gsap.timeline()
        .from("#gTitle", {duration: 0.8, opacity: 0, y:30})
        .from("#gInput", { duration: 0.8, opacity: 0, y:30}, "-=0.7")
        .from("#gBtns", {duration: 0.8, opacity:0, y:30}, "-=0.6")

    }, [])

    useEffect( () =>{
        if(quest === 1){
            gsap.from(".question1", {duration: 1, opacity: 0, y:100}) 
        }
        if(quest === 2){
            gsap.from(".question2", {duration: 1,opacity: 0, y:100}) 
            gsap.to(".question1", { border: "2px solid green"})
        }
        if(quest === 3){
            gsap.from(".question3", {duration: 1, opacity: 0, y:100}) 
            gsap.to(".question2", { border: "2px solid green"})
        }
        if(quest === 4){
            gsap.from(".question4", {duration: 1, opacity: 0, y:100}) 
            gsap.to(".question3", { border: "2px solid green"})
        }
        if(quest === 5) {
            gsap.to(".question4", { border: "2px solid green"})
        }
    }, [quest])

    const nextStepHelp = () => {
        if(quest >= 5){
            nextStep()
        }
        else {
            setQuest(quest + 1)
        }
    }

    return (
        <div className={goalStyles.container}>
            <div id='gTitle' className={goalStyles.main}>
                <FormHeader title="Ziele setzen" />

                <div id='gInput' className={goalStyles.sectionText}>
                    <label>Welches Ziel möchtest du erreichen? Versuche es bitte möglichst konkret zu beschreiben.</label>
                    <TextField
                        className={goalStyles.field}
                        label="Welches Ziel möchtest du erreichen?"
                        onChange={e => handleChange("goal", e)}
                        defaultValue={values.goal}
                        multiline
                    />
                </div>
                { quest >= 1
                ?
                <div className={`${goalStyles.section} question1`}>
                    <label className={goalStyles.field}>Würde das Erreichen dieses Ziels eine gesündere Lebensweise ermöglichen?</label>
                    {quest == 1 && 
                        <div className={goalStyles.questBtn}>
                            <Button onClick={() => setQuest(0)} variant="outlined">Nein</Button>
                            <Button onClick={() => setQuest(quest + 1)} variant="outlined">Ja</Button>
                        </div>}
                    {quest >=2 &&
                    <>
                    <label className={goalStyles.fieldJa}><CheckBoxRoundedIcon /> </label>
                    
                    </>}
                </div>
                : <></>
                }
                { quest >= 2
                ?
                <div className={`${goalStyles.section} question2`}>
                    <label className={goalStyles.field}>Ist das Ziel mit deinem Alltag und den anstehenden Aufgaben vereinbar?</label>
                    {quest == 2 && 
                        <div className={goalStyles.questBtn}>
                            <Button onClick={() => setQuest(0)} variant="outlined">Nein</Button>
                            <Button onClick={() => setQuest(quest + 1)} variant="outlined">Ja</Button>
                        </div>}
                    {quest >=3 &&
                        <label className={goalStyles.fieldJa} > <CheckBoxRoundedIcon /> </label>}
                </div>
                : <></>
                }
                { quest >= 3
                ?
                <div className={`${goalStyles.section} question3`}>
                    <label className={goalStyles.field}>Lässt es sich messen, wann du das Ziel erreicht hast? Gibt es einen Zeitpunkt, an denen du deinen Erfolg feststellen kannst?</label>
                    {quest == 3 && 
                        <div className={goalStyles.questBtn}>
                            <Button onClick={() => setQuest(0)} variant="outlined">Nein</Button>
                            <Button onClick={() => setQuest(quest + 1)} variant="outlined">Ja</Button>
                        </div>}
                    {quest >=4 &&
                        <label className={goalStyles.fieldJa}> <CheckBoxRoundedIcon /></label>}
                </div>
                : <></>
                }
                 { quest >= 4
                ?
                <div className={`${goalStyles.section} question4`}>
                    <label className={goalStyles.field}>Passt das Ziel zu deinen Wünschen, aber auch deiner Leistungsfähigkeit?</label>
                    {quest == 4 && 
                        <div className={goalStyles.questBtn}>
                            <Button onClick={() => setQuest(0)} variant="outlined">Nein</Button>
                            <Button onClick={() => setQuest(quest + 1)} variant="outlined">Ja</Button>
                        </div>}
                    {quest >=5 &&
                        <label className={goalStyles.fieldJa}> <CheckBoxRoundedIcon /> </label>}
                </div>
                : <></>
                }
                <div id="gBtns" className={goalStyles.stepBtn}>
                    {(quest < 1 || quest >= 5) && <Button onClick={prevStep} variant="outlined">Zurück</Button>}
                    {(quest < 1 || quest >=5) &&<Button onClick={nextStepHelp} variant="outlined">Weiter</Button>}
                </div>
            </div>
        </div>
    )
}

export default FormGoalSetting
