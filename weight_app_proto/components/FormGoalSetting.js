import React, { useState } from 'react'
import goalStyles from '../styles/Goal.module.css'
import FormHeader from './FormHeader'
import { TextField, Button, fabClasses } from '@mui/material'

const FormGoalSetting = ({ values, handleChange, prevStep, nextStep }) => {

    const [quest, setQuest] = useState(0)

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
                { quest >= 1
                ?
                <div className={goalStyles.section}>
                    <label className={goalStyles.field}>Würde das Erreichen dieses Ziels eine gesündere Lebensweise ermöglichen?</label>
                    {quest == 1 && 
                        <div className={goalStyles.questBtn}>
                            <Button onClick={() => setQuest(0)} variant="outlined">Nein</Button>
                            <Button onClick={() => setQuest(quest + 1)} variant="outlined">Ja</Button>
                        </div>}
                    {quest >=2 &&
                    <label className={goalStyles.fieldJa}>Ja.</label>}
                </div>
                : <></>
                }
                { quest >= 2
                ?
                <div className={goalStyles.section}>
                    <label className={goalStyles.field}>Ist das Ziel mit deinem Alltag und den anstehenden Aufgaben vereinbar?</label>
                    {quest == 2 && 
                        <div className={goalStyles.questBtn}>
                            <Button onClick={() => setQuest(0)} variant="outlined">Nein</Button>
                            <Button onClick={() => setQuest(quest + 1)} variant="outlined">Ja</Button>
                        </div>}
                    {quest >=3 &&
                        <label className={goalStyles.fieldJa} >Ja.</label>}
                </div>
                : <></>
                }
                { quest >= 3
                ?
                <div className={goalStyles.section}>
                    <label className={goalStyles.field}>Lässt es sich messen, wann du das Ziel erreicht hast? Gibt es einen Zeitpunkt, an denen du deinen Erfolg feststellen kannst?</label>
                    {quest == 3 && 
                        <div className={goalStyles.questBtn}>
                            <Button onClick={() => setQuest(0)} variant="outlined">Nein</Button>
                            <Button onClick={() => setQuest(quest + 1)} variant="outlined">Ja</Button>
                        </div>}
                    {quest >=4 &&
                        <label className={goalStyles.fieldJa}>Ja.</label>}
                </div>
                : <></>
                }
                 { quest >= 4
                ?
                <div className={goalStyles.section}>
                    <label className={goalStyles.field}>Passt das Ziel zu deinen Wünschen, aber auch deiner Leistungsfähigkeit?</label>
                    {quest == 4 && 
                        <div className={goalStyles.questBtn}>
                            <Button onClick={() => setQuest(0)} variant="outlined">Nein</Button>
                            <Button onClick={() => setQuest(quest + 1)} variant="outlined">Ja</Button>
                        </div>}
                    {quest >=5 &&
                        <label className={goalStyles.fieldJa}>Ja.</label>}
                </div>
                : <></>
                }
                <div className={goalStyles.stepBtn}>
                    {(quest < 1 || quest >= 5) && <Button onClick={prevStep} variant="outlined">Zurück</Button>}
                    {(quest < 1 || quest >=5) &&<Button onClick={nextStepHelp} variant="outlined">Weiter</Button>}
                </div>
            </div>
        </div>
    )
}

export default FormGoalSetting
