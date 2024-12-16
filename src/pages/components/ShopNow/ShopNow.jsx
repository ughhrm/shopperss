import React from 'react'
import styles from "../ShopNow/ShopNow.module.scss"

const ShopNow = () => {
  return (
    <div className={`${styles.container} flex-row`}>
        <div className={`${styles.context}`}>
            <div className={`${styles.infoBox} `}>
                <h2>Finding Your Perfect Shoes</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                <button>SHOP NOW</button>
            </div>
        </div>
    </div>
  )
}

export default ShopNow