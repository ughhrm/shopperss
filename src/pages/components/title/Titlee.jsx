import React from 'react'
import styles from './Titile.module.scss'

const Titlee = ({item}) => {
    return (
        <div className={`${styles.container} flex-column`}>
            <div></div>
            <p>{item}</p>
        </div>
    )
}

export default Titlee