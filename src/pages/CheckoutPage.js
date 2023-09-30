import React from 'react'
import { PageHero, StripeCheckout } from '../components'
import './checkout.css'
import { useCartContext } from '../context/cart_context'
import { Link, Outlet } from 'react-router-dom'

const CheckoutPage = () => {
  const { cart } = useCartContext()

  return (
    <main>
      <PageHero title='checkout' />
      <div className='page checkout'>
        {cart.length < 1 ? (
          <div className='empty'>
            <h2>Your cart is empty</h2>
            <Link to='/products' className='btn mt-5'>
              fill it
            </Link>
          </div>
        ) : (
          // <StripeCheckout />
          <Outlet/>
        )}
      </div>
    </main>
  )
}


export default CheckoutPage
