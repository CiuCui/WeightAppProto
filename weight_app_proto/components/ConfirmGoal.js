import React, {useEffect} from 'react'
import goalStyles from '../styles/Goal.module.css'
import FormHeader from './FormHeader';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import {gsap} from 'gsap';


const FormGoalConfirm = ({ values, prevStep, confirm }) => {


    useEffect(() => {
        var gTimeline = gsap.timeline()
        .from("#gTitle", {x:30, duration: 0.3, opacity: 0})
        .from("#overview", {y:50, duration: 0.3, opacity: 0}, "-=0.25")
        .from("#gBtns", {y:50, duration: 0.3, opacity: 0}, "-=0.2")
    },[])


    const test = (e) => {
        e.preventDefault;
        console.log(values)
    }

    return (
        <div className={goalStyles.container}>
            <div className={goalStyles.main}>
                <div id="gTitle">
                    <FormHeader title="Overview" />
                </div>
                
                <div id="overview" className={goalStyles.overview}>
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
                            <label>Motivation:</label>
                        </Grid>
                        <Grid item xs={6} className={goalStyles.overviewItem}>
                            <label>{values.motivation}</label>
                        </Grid>
                    </Grid>

                </div>


                <div id="gBtns" className={goalStyles.stepBtn}>
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
