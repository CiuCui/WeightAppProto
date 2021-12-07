import React from 'react'
import formHeaderStyles from '../styles/FormHeader.module.css'

const FormHeader = ({ title }) => {
    return (
        <div className={formHeaderStyles.main}>
            <h2 className={formHeaderStyles.title}> {title} </h2>
        </div>
    )
}

export default FormHeader
