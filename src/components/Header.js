import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <div className='container'>
       <div className='row'>
       <ul className="nav ">
       <img src={logo} alt='logo' height={50} width={50}/>
       <h5>ECOMMERCE-CART</h5> 
       <li className="nav-item mx-5" >
       <NavLink to='/'>Home</NavLink>
       </li>
       <li className="nav-item mx-5">
       <NavLink to='cart'>Cart</NavLink>
       </li>
       <span>Count-2</span>
     </ul>
    
       </div>
    
    </div>
  )
}
