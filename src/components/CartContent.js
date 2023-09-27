import React from 'react'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartTotals from './CartTotals'
import CartItem from './CartItem'
import './carcontent.scss'
const CartContent = () => {
  const { cart, clearCart } = useCartContext()

  return (
    <div className='w-10/12 mx-auto'>
      <CartColumns/>
      {cart.map((item) => {
        return <CartItem {...item} key={item.id} />
      })}
      <CartTotals/>
    </div>
  )
}

export default CartContent
