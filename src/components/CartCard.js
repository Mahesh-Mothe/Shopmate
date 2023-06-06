import React from 'react'

export default function CartCard({product}) {
    const {id,name,price,image}=product
  return (
    <div>
    
    <div className="cartCard">
        <img src={image} alt={name} height={100}/>
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button className='btn btn-danger'>Remove</button>
      </div>
    </div>
  )
}

