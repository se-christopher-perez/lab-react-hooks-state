import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ filter, setCartItems }) => {

  function handleAddCart(product){

    setCartItems((prevCartItems) => [...prevCartItems, product])

  }

  const filterSampleProducts = sampleProducts.filter((product) => {

    if(filter === "all"){

      return product

    } else {

      return product.category === filter

    }

  })

  console.log(filterSampleProducts)

  return (

    <div>

      <h2>Available Products</h2>

      {/* TODO: Filter sample data using selected category */}
      {filterSampleProducts.length > 0 ? (filterSampleProducts.map((product) => (

        <ProductCard key={product.id} product={product} handleAddCart={handleAddCart}/>

      ))) : (<p>no products available</p>)}

    </div>

  )

}

export default ProductList
