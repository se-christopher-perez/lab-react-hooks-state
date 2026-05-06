import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle

  // TODO: Implement state for cart management
  const [filter, setFilter] = useState("all")
  const [cartItems, setCartItems] = useState([])

  // TODO: Implement state for category filtering

  function handleChange(value){

    setFilter(value)

    console.log(value)

  }

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle />

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select onChange={(e) => handleChange(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="Meat">Meat</option>
      </select>

      <ProductList filter={filter} setCartItems={setCartItems}/>

      {/* TODO: Implement and render Cart component */}

      <Cart cartItems={cartItems}/>
    </div>
  )
}

export default App
