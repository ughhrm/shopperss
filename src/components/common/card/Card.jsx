import React from 'react'

const Card = ({item}) => {
  return (
    <div>
        <div><img src={item.image} alt="" /></div>
        <div>
            <h5>{item.category}</h5>
            <p>{item.price}</p>
        </div>
    </div>
  )
}

export default Card