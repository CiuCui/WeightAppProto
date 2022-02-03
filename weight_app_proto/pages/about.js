import React , {useEffect} from 'react'
import aboutStyles from '../styles/About.module.css'
import {Button} from '@mui/material'
import { UserContext } from '../contexts/userContext';
import {gsap} from 'gsap';



const about = () => {
    const user = React.useContext(UserContext);

    gsap.defaults({
        ease: "power2.out"
    })

    useEffect(() => {
        gsap.from(".gTitle", {x:50, opacity: 0, duration: 1})
        gsap.from(".gText", {x: 30, opacity: 0, duration: 1})
        gsap.from(".gBtn", {y:100, opacity: 0, duration: 1.5})
    }, []);


    const findIchGut = () => {
        console.log("Danke")
    }
    return (
        <>
            <div className={aboutStyles.container}>
                <div className={aboutStyles.main}>
                    <h1 className='gTitle'>About</h1>
                    <div className={`${aboutStyles.section} gText`}>
                        Dieser Prototyp wurde im Rahmen einer Bachelorarbeit von Philipp Ciupke angefertigt.
                    </div>

                    <div className={`${aboutStyles.section} gBtn`}>
                        <Button variant="outlined" onClick={findIchGut}> Find ich gut.</Button>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default about
