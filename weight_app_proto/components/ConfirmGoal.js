import React from 'react'
import goalStyles from '../styles/Goal.module.css'
import FormHeader from './FormHeader';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from 'next/link'


const FormGoalConfirm = ({ values, prevStep, confirm }) => {

    const test = (e) => {
        e.preventDefault;
        console.log(values)
    }

    return (
        <div className={goalStyles.container}>
            <div className={goalStyles.main}>
                <FormHeader title="Overview" />
                <div className={goalStyles.overview}>
                    <Grid container spacing={2}>
                        <Grid item xs={3} className={goalStyles.overviewItem}>
                            <label>Ziel:</label>
                        </Grid>
                        <Grid item xs={8} className={goalStyles.overviewItem}>
                            <label>{values.goal}</label>
                        </Grid>
                        <Grid item xs={5} className={goalStyles.overviewItem}>
                            <label>Selbstwirksamkeit:</label>
                        </Grid>
                        <Grid item xs={6} className={goalStyles.overviewItem}>
                            <label>{values.selfEfficacy}</label>
                        </Grid>
                        <Grid item xs={5} className={goalStyles.overviewItem}>
                            <label>Motivtion:</label>
                        </Grid>
                        <Grid item xs={6} className={goalStyles.overviewItem}>
                            <label>{values.motivation}</label>
                        </Grid>
                    </Grid>

                </div>


                <div className={goalStyles.stepBtn}>
                    <Button onClick={prevStep} variant="outlined">Zurück</Button>
                    <Link href="/moveChallenge">
                        <Button onClick={confirm} variant="outlined">Speichern</Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default FormGoalConfirm
