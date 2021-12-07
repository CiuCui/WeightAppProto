import React from 'react'
import personalStyles from '../styles/Personal.module.css'
import FormHeader from './FormHeader';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';


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
                            <label>First Name:</label>
                        </Grid>
                        <Grid item xs={6} className={personalStyles.overviewItem}>
                            <label>{values.firstName}</label>
                        </Grid>
                        <Grid item xs={5} className={personalStyles.overviewItem}>
                            <label>Last Name:</label>
                        </Grid>
                        <Grid item xs={6} className={personalStyles.overviewItem}>
                            <label>{values.lastName}</label>
                        </Grid>
                        <Grid item xs={5} className={personalStyles.overviewItem}>
                            <label>Mail:</label>
                        </Grid>
                        <Grid item xs={6} className={personalStyles.overviewItem}>
                            <label>{values.mail}</label>
                        </Grid>
                        <Grid item xs={5} className={personalStyles.overviewItem}>
                            <label>Age</label>
                        </Grid>
                        <Grid item xs={6} className={personalStyles.overviewItem}>
                            <label>{values.age}</label>
                        </Grid>
                        <Grid item xs={5} className={personalStyles.overviewItem}>
                            <label>Weight</label>
                        </Grid>
                        <Grid item xs={6} className={personalStyles.overviewItem}>
                            <label>{values.weight}</label>
                        </Grid>
                        <Grid item xs={5} className={personalStyles.overviewItem}>
                            <label>Height</label>
                        </Grid>
                        <Grid item xs={6} className={personalStyles.overviewItem}>
                            <label>{values.height}</label>
                        </Grid>
                    </Grid>

                </div>


                <div className={personalStyles.stepBtn}>
                    <Button onClick={prevStep} variant="outlined">Previous</Button>
                    <Button onClick={confirm} variant="outlined">Confirm</Button>
                    <Button onClick={test} variant="contained">Test</Button>
                </div>

            </div>
        </div>
    )
}

export default FormConfirm
