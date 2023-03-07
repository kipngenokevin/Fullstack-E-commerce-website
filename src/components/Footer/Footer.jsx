import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h4>Categories</h4>
          <Link className='link' to='products/1'>Bags</Link>
          <Link className='link' to='products/2'>Shoes</Link>
          <Link className='link' to='products/3'>Watches</Link>
          <Link className='link' to='products/4'>Jewelry</Link>
        </div>
        <div className="item">
          <h4>Links</h4>
          <Link className='link' to='about-us'>About Us</Link>
          <Link className='link' to='privacy-policy'>Privacy Policy</Link>
          <Link className='link' to='return-policy'>Return Policy</Link>
          <Link className='link' to='shipping-policy'>Shipping Policy</Link>
          <Link className='link' to='terms-of-use'>Terms Of Use</Link>
        </div>
        <div className="item">
          <h4>At a Glance</h4>
          <span>
          We're a fashion and lifestyle brand that curate and promote the best products among thousands in the market to gift you the most innovative ones that you probably never heard about before.
          <br></br>
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Fashionfinds</span>
          <span className="copyright">&#169; Copyright 2023. All rights reserved.</span>
        </div>
        <div className="right">
          <img src='' alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Footer