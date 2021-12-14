import React from 'react'
import challengeStyles from '../styles/Challenge.module.css'
import { Button } from '@mui/material'

const ConfirmMovementChallenge = ({ values, prevStep }) => {
    return (
        <>
            Confirm Challenge
            <div className={challengeStyles.stepBtn}>
                <Button onClick={prevStep} variant="outlined">Zurück</Button>
            </div>
        </>
    )
}

export default ConfirmMovementChallenge
