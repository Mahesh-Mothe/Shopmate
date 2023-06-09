import React from 'react'
import './productcard.css'
export default function ProductCard({product}) {
    const {id,name,price,image}=product
  return (
    <> 
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button>Add To Cart</button>
        </div>
        </div>
    </>
  )
}
