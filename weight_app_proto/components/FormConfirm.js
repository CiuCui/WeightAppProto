import React from 'react'
import personalStyles from '../styles/Personal.module.css'
import FormHeader from './FormHeader';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Link from 'next/link'


const FormConfirm = ({ values, prevStep, confirm }) => {



    const test = (e) => {
        e.preventDefault;
        console.log(values)
    }

    return (
        <div className={personalStyles.container}>
            <div className={personalStyles.main}>
                <FormHeader title="Overview" />
                <div className={personalStyles.overview}>
                    <Grid container spacing={2}>
                        <Grid item xs={5} className={personalStyles.overviewItem}>
                            <label>Vorame:</label>
                        </Grid>
                        <Grid item xs={6} className={personalStyles.overviewItem}>
                            <label>{values.firstName}</label>
                        </Grid>
                        <Grid item xs={5} className={personalStyles.overviewItem}>
                            <label>Nachname:</label>
                        </Grid>
                        <Grid item xs={6} className={personalStyles.overviewItem}>
                            <label>{values.lastName}</label>
                        </Grid>
                        <Grid item xs={5} className={personalStyles.overviewItem}>
                            <label>Geschlecht:</label>
                        </Grid>
                        <Grid item xs={6} className={personalStyles.overviewItem}>
                            <label>{values.gender}</label>
                        </Grid>
                        <Grid item xs={5} className={personalStyles.overviewItem}>
                            <label>Mail:</label>
                        </Grid>
                        <Grid item xs={6} className={personalStyles.overviewItem}>
                            <label>{values.mail}</label>
                        </Grid>
                        <Grid item xs={5} className={personalStyles.overviewItem}>
                            <label>Alter</label>
                        </Grid>
                        <Grid item xs={6} className={personalStyles.overviewItem}>
                            <label>{values.age}</label>
                        </Grid>
                        <Grid item xs={5} className={personalStyles.overviewItem}>
                            <label>Gewicht</label>
                        </Grid>
                        <Grid item xs={6} className={personalStyles.overviewItem}>
                            <label>{values.weight}</label>
                        </Grid>
                        <Grid item xs={5} className={personalStyles.overviewItem}>
                            <label>Größe</label>
                        </Grid>
                        <Grid item xs={6} className={personalStyles.overviewItem}>
                            <label>{values.height}</label>
                        </Grid>
                    </Grid>

                </div>


                <div className={personalStyles.stepBtn}>
                    <Button onClick={prevStep} variant="outlined">Zurück</Button>
                    <Link href="/goals" >
                        <Button onClick={confirm} variant="outlined">Speichern</Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default FormConfirm
