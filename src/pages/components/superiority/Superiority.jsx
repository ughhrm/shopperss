import React from 'react'
import styles from './Superiority.module.scss'
import { FaCarSide } from "react-icons/fa";
import { MdOutlineUpdate } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";


const Superiority = () => {
  return (
    <div className={`${styles.container} flex-row`}>
        <div className={`${styles.context} flex-row-between`}>
            <div className={`${styles.cartBox} `}>
                <button><FaCarSide/></button>
                <div className={`${styles.cartInfo} `}>
                <h5>Free Shipping</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                </div>
            </div>
            <div className={`${styles.cartBox} `}>
                <button><MdOutlineUpdate/></button>
                <div className={`${styles.cartInfo} `}>
                <h5>Free Returns</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                </div>
            </div>
            <div className={`${styles.cartBox} `}>
                <button><FaQuestion/></button>
                <div className={`${styles.cartInfo} `}>
                <h5>Customer Support</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Superiority