import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './pagehero.css'

const PageHero = ({ title, product }) => {
  return (
      <div className='mx-10 mt-5'>
        <h3 className='section-hero'>
          <Link to='/'> Home </Link>
          {product && <Link to='/products'>/ Products</Link>}/ {title}
        </h3>
      </div>
  )
}


export default PageHero
