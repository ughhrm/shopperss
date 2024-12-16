import React from 'react'
import styles from '../header/Header.module.scss'
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";



const Header = () => {
  return (
    <div className={`${styles.container} flex-row`}>
        <div className={`${styles.context} flex-row-between`}>
        <div className={`${styles.inputBox} flex-row`}>
            <button><IoIosSearch/></button>
            <input type="text" placeholder='Search'/>
        </div>
        <p>SHOPPERS</p>
        <div className={`${styles.iconBox} flex-row`}>
            <button><FaUser/></button>
            <button><CiHeart/></button>
            <button><SlBasket/></button>
        </div>
        </div>

    </div>
  )
}

export default Header