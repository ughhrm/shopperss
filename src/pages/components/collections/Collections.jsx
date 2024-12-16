import React from 'react'
import styles from './Collections.module.scss'

const Collections = () => {
  return (
    <div className={`${styles.container} flex-row`}>
        <div className={`${styles.context} flex-row-between`}>
        <div className={`${styles.cartBox} ${styles.img1}` } >
          <p>Collections</p>
          <h1>Women</h1>

        </div> 
        <div className={`${styles.cartBox} ${styles.img2}` }>
          <p>Collections</p>
          <h1>Women</h1>

        </div>
        <div className={`${styles.cartBox} ${styles.img3}` }>
          <p>Collections</p>
          <h1>Women</h1>

        </div>
      </div>
    </div>
  )
}

export default Collections