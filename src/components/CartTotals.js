import React from 'react'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext()
  const { myUser, loginWithRedirect } = useUserContext()

  return (
    <div>
      <h4>subtotal: <span>{formatPrice(total_amount)}</span></h4>
      <h5>shipping fee: <span>{formatPrice(shipping_fee)}</span></h5>
      <hr/>
      <h2>TOTAL: <span>{formatPrice(total_amount + shipping_fee)}</span></h2>
    </div>
  )
}



export default CartTotals
