import React from 'react'
import CartCard from '../components/CartCard'

export default function Cart() {

    const products=[
        {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
        {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png"},
    ]
  return (
    <div>
      <h4>Cart-Items:{products.length}</h4>
      {products.map((product)=>{
        return <CartCard key={product.id} product={product} />
      })}
    </div>
  )
}
