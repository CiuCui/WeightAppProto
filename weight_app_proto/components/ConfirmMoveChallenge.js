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
            times.push(values.times["Mittwoch"])
        }
        if (values.times["Donnerstag"]["time"]) {
            times.push(values.times["Donnerstag"])
        }
        if (values.times["Freitag"]["time"]) {
            times.push(values.times["Freitag"])
        }
        setTim(values.times)
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
                        </Grid>
                    </div>
                    <div>
                        <Grid container spacing={2}>
                            {
                                (values.times["Montag"]["time"])
                                    ?
                                    <>
                                        <Grid item xs={4} className={challengeStyles.overviewItem}>
                                            <label> Montag </label>
                                        </Grid>
                                        <Grid item xs={4} className={challengeStyles.overviewItem}>
                                            <label> {values.times["Montag"]["time"].toLocaleTimeString()} </label>
                                        </Grid>
                                        <Grid item xs={4} className={challengeStyles.overviewItem}>
                                            <label> {values.times["Montag"]["place"]} </label>
                                        </Grid>
                                    </>
                                    : <></>
                            }
                            {
                                (values.times["Dienstag"]["time"])
                                    ?
                                    <>
                                        <Grid item xs={4} className={challengeStyles.overviewItem}>
                                            <label> Dienstag </label>
                                        </Grid>
                                        <Grid item xs={4} className={challengeStyles.overviewItem}>
                                            <label> {values.times["Dienstag"]["time"].toLocaleTimeString()} </label>
                                        </Grid>
                                        <Grid item xs={4} className={challengeStyles.overviewItem}>
                                            <label> {values.times["Dienstag"]["place"]} </label>
                                        </Grid>
                                    </>
                                    : <></>
                            }
                            {
                                (values.times["Mittwoch"]["time"])
                                    ?
                                    <>
                                        <Grid item xs={4} className={challengeStyles.overviewItem}>
                                            <label> Mittwoch </label>
                                        </Grid>
                                        <Grid item xs={4} className={challengeStyles.overviewItem}>
                                            <label> {values.times["Mittwoch"]["time"].toLocaleTimeString()} </label>
                                        </Grid>
                                        <Grid item xs={4} className={challengeStyles.overviewItem}>
                                            <label> {values.times["Mittwoch"]["place"]} </label>
                                        </Grid>
                                    </>
                                    : <></>
                            }
                            {
                                (values.times["Donnerstag"]["time"])
                                    ?
                                    <>
                                        <Grid item xs={4} className={challengeStyles.overviewItem}>
                                            <label> Donnerstag </label>
                                        </Grid>
                                        <Grid item xs={4} className={challengeStyles.overviewItem}>
                                            <label> {values.times["Donnerstag"]["time"].toLocaleTimeString()} </label>
                                        </Grid>
                                        <Grid item xs={4} className={challengeStyles.overviewItem}>
                                            <label> {values.times["Donnerstag"]["place"]} </label>
                                        </Grid>
                                    </>
                                    : <></>
                            }
                            {
                                (values.times["Freitag"]["time"])
                                    ?
                                    <>
                                        <Grid item xs={4} className={challengeStyles.overviewItem}>
                                            <label> Freitag </label>
                                        </Grid>
                                        <Grid item xs={4} className={challengeStyles.overviewItem}>
                                            <label> {values.times["Freitag"]["time"].toLocaleTimeString()} </label>
                                        </Grid>
                                        <Grid item xs={4} className={challengeStyles.overviewItem}>
                                            <label> {values.times["Freitag"]["place"]} </label>
                                        </Grid>
                                    </>
                                    : <></>
                            }
                            {
                                (values.times["Samstag"]["time"])
                                    ?
                                    <>
                                        <Grid item xs={4} className={challengeStyles.overviewItem}>
                                            <label> Samstag </label>
                                        </Grid>
                                        <Grid item xs={4} className={challengeStyles.overviewItem}>
                                            <label> {values.times["Samstag"]["time"].toLocaleTimeString()} </label>
                                        </Grid>
                                        <Grid item xs={4} className={challengeStyles.overviewItem}>
                                            <label> {values.times["Samstag"]["place"]} </label>
                                        </Grid>
                                    </>
                                    : <></>
                            }
                            {
                                (values.times["Sonntag"]["time"])
                                    ?
                                    <>
                                        <Grid item xs={4} className={challengeStyles.overviewItem}>
                                            <label> Sonntag </label>
                                        </Grid>
                                        <Grid item xs={4} className={challengeStyles.overviewItem}>
                                            <label> {values.times["Sonntag"]["time"].toLocaleTimeString()} </label>
                                        </Grid>
                                        <Grid item xs={4} className={challengeStyles.overviewItem}>
                                            <label> {values.times["Sonntag"]["place"]} </label>
                                        </Grid>
                                    </>
                                    : <></>
                            }

                        </Grid>
                    </div>

                    <div className={challengeStyles.stepBtn}>
                        <Button onClick={prevStep} variant="outlined">Zurück</Button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ConfirmMovementChallenge
