import React from 'react'
import Product from './Product'
import './gridview.css'

const GridView = ({ products }) => {
  
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {products && products.map((product) => {
        return <Product key={product.id} {...product} />
      })}
    </div>
  )
}

export default GridView
