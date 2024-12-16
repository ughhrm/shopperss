import React from 'react'
import styles from '../header/HeaderLink.module.scss'

const HeaderLink = () => {
  return (
    <div className={`${styles.container} flex-row`}>
        <div className={`${styles.context} flex-row-between`}>
            <button>HOME</button>
            <button>ABOUT</button>
            <button>SHOP</button>
            <button>CATAGORUE</button>
            <button>NEW ARRIVALS</button>
            <button>CONTACT</button>
        </div>
        
    </div>
  )
}

export default HeaderLink