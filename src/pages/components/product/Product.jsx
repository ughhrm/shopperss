import React, { useEffect } from 'react'
import styles from './Product.module.scss'
import Card from '../../../components/common/card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { getDatathunk } from '../../../redux/dataSlice'


const Product = () => {
    const dispatch = useDispatch();
    const product = useSelector(state=>state.data.data)
    useEffect(()=>{
        dispatch(getDatathunk())
    },[])
  return (
    <div className={`${styles.container} flex-row`}>
        <div className={`${styles.context}`}>
            { 
                product&&product.map(item=><Card item={item}/>)
            }

    </div>
    </div>
  )
}

export default Product