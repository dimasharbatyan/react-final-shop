import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

let sum = 0

export default function Header(props) {

  let [cartOpen, setCartOpen] = useState(false)


  return (
    <header>
    <div>
        <span className='logo'>House Shop</span>
        <ul className='nav'>

        </ul>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={'shop-cart-button ${cartOpen && "active"}' }/>

        {cartOpen && (
          <div className='shop-cart'>
      {props.orders.forEach(el => sum += Number.parseFloat(el.price))}

      {
      props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}

      <p className='sum'>ჯამი: {sum}₾</p>
          </div>
        )}
    </div>
    <div className='presentation'>

    </div>
    </header>

  )
}
