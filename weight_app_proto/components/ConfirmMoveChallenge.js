import React, { useEffect, useState } from 'react'
import challengeStyles from '../styles/Challenge.module.css'
import FormHeader from './FormHeader'
import { Button, Grid } from '@mui/material'

const ConfirmMovementChallenge = ({ values, prevStep }) => {

    const [tim, setTim] = useState([])


    useEffect(() => {
        let times = []
        if (values.times["Montag"]["time"]) {
            times.push(values.times["Montag"])
        }
        if (values.times["Dienstag"]["time"]) {
            times.push(values.times["Dienstag"])
        }
        if (values.times["Mittwoch"]["time"]) {
            times.push(values.times["Dienstag"])
        }
        if (values.times["Donnerstag"]["time"]) {
            times.push(values.times["Dienstag"])
        }
        if (values.times["Freitag"]["time"]) {
            times.push(values.times["Dienstag"])
        }
        console.log("Times", times)
        setTim(...tim, times)
    }, [])

    return (
        <>
            <div className={challengeStyles.container}>
                <div className={challengeStyles.main}>
                    <FormHeader title="Overview" />
                    <div className={challengeStyles.overviewConfirm}>
                        <Grid container spacing={2}>
                            <Grid item xs={5} className={challengeStyles.overviewItem}>
                                <label>Bewegungsart:</label>
                            </Grid>
                            <Grid item xs={6} className={challengeStyles.overviewItem}>
                                <label>{values.moveType}</label>
                            </Grid>
                            <Grid item xs={5} className={challengeStyles.overviewItem}>
                                <label>Aktivitäten pro Tag:</label>
                            </Grid>
                            <Grid item xs={6} className={challengeStyles.overviewItem}>
                                <label>{values.timesPerDay}</label>
                            </Grid>
                            <Grid item xs={5} className={challengeStyles.overviewItem}>
                                <label>Distanz/Häufigkeit/Dauer:</label>
                            </Grid>
                            <Grid item xs={6} className={challengeStyles.overviewItem}>
                                <label>{values.distance} {values.unit}</label>
                            </Grid>


                            {values.times ? <>
                                {values.times.map((day) => (
                                    <React.Fragment key={day["time"]} >
                                        <Grid item xs={3} className={challengeStyles.overviewItem}>
                                            <label> {day} </label>
                                        </Grid>
                                        <Grid item xs={3} className={challengeStyles.overviewItem}>
                                            <label>Distanz/Häufigkeit/Dauer:</label>
                                        </Grid>
                                        <Grid item xs={3} className={challengeStyles.overviewItem}>
                                            <label> Value {values.distance} {values.unit}</label>
                                        </Grid>
                                    </React.Fragment>

                                ))}
                            </>
                                :
                                <></>
                            }
                        </Grid>
                    </div>

                    <div className={challengeStyles.stepBtn}>
                        <Button onClick={prevStep} variant="outlined">Zurück</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmMovementChallenge
