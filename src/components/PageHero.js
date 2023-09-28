import React from 'react'
import { Link } from 'react-router-dom'
import './pagehero.css'

const PageHero = ({ title, product }) => {
  return (
      <div className='mx-10 mt-4'>
        <h3 className='section-hero border-2 rounded-full border-black bg-amber-100 relative'>
          <Link to='/'> 
          <span className='border border-black rounded-full px-3 py-1 hover:bg-neutral-200'>Home</span>
          </Link>
          {product && <Link to='/products'>/ <span className='border border-black rounded-full px-3 py-1 hover:bg-neutral-200'>Products</span></Link>}/<span className='font-semibold '>{title}</span>
        </h3>
      </div>
  )
}


export default PageHero
