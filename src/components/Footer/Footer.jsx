import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h4>Categories</h4>
          <span>Bags</span>
          <span>Shoes</span>
          <span>Watches</span>
          <span>Jewelry</span>
        </div>
        <div className="item">
          <h4>Links</h4>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h4>About</h4>
          <span>
          We're a fashion and lifestyle brand that curate and promote the best products among thousands in the market to gift you the most innovative ones that you probably never heard about before.
          <br></br>
          <br></br>
          What we do? 
          </span>
        </div>
        <div className="item">
          <h4>Contact</h4>
          <span>
           Email: doreenrita123@gmail.com
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Fashion FInds</span>
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