import React from 'react'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import './listview.css'
import Product from './Product'

const ListView = ({ products }) => {
  return (
    <section>
      <div className="products-center">
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div> 
    </section>
  )
}

export default ListView
