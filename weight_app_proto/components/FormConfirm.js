import React, {useEffect} from 'react'
import personalStyles from '../styles/Personal.module.css'
import FormHeader from './FormHeader';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import {gsap} from 'gsap'; 


const FormConfirm = ({ values, prevStep, confirm }) => {

    
    useEffect(() =>{
        var gTimeline = gsap.timeline()
        .from("#gTitle", {y:30, duration: 0.8, opacity: 0})
        .from(".overview", {y:30, duration: 0.5, opacity: 0}, "-=0.6")
        .from("#gBtns", {y:30, duration: 0.5, opacity: 0}, "-=0.5")
    }, [])


    const test = (e) => {
        e.preventDefault;
        console.log(values)
    }

    return (
        <div className={personalStyles.container}>
            <div className={personalStyles.main}>
                <div id='gTitle'>
                    <FormHeader title="Overview" />
                </div>
                
                <div className={`${personalStyles.overview} overview`}>
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


                <div id='gBtns' className={personalStyles.stepBtn} >
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
