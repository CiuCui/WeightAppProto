import React from 'react'
import aboutStyles from '../styles/About.module.css'
import {Button} from '@mui/material'
import { UserContext } from '../contexts/userContext';



const about = () => {
    const user = React.useContext(UserContext);


    const findIchGut = () => {
        console.log("Danke")
    }
    return (
        <>
            <div className={aboutStyles.container}>
                <div className={aboutStyles.main}>
                    <h1>About</h1>
                    <div className={aboutStyles.section}>
                        Dieser Prototyp wurde im Rahmen einer Bachelorarbeit von Philipp Ciupke angefertigt.
                    </div>

                    <div className={aboutStyles.section}>
                        <Button variant="outlined" onClick={findIchGut}> Find ich gut.</Button>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default about
