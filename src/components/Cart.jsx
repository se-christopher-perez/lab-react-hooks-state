import React from 'react'

const Cart = ({ cartItems }) => {

  return (

    <div>

      <h2>Shopping Cart</h2>

      {(cartItems.length > 0) ? <ul>

        {cartItems.map((cartItem) => {

          return <li key={cartItem.name}>{cartItem.name} is in your cart</li>

        })}

      </ul> : <p>Empty</p>}

    </div>

  )
  
}

export default Cart
