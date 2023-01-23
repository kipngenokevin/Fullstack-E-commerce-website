import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h4>Categories</h4>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum id nibh ac ultricies. 
            Aenean lobortis libero quis fringilla consectetur. Ut ac pretium enim. Ut eu neque pretium, varius nulla varius, egestas magna. 
            Sed placerat nulla sed mauris iaculis finibus. Morbi augue nisl, condimentum vel mauris eget, porttitor elementum velit.
          </span>
        </div>
        <div className="item">
          <h4>Contact</h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum id nibh ac ultricies. 
            Aenean lobortis libero quis fringilla consectetur. Ut ac pretium enim. Ut eu neque pretium, varius nulla varius, egestas magna. 
            Sed placerat nulla sed mauris iaculis finibus. Morbi augue nisl, condimentum vel mauris eget, porttitor elementum velit.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Cherustore</span>
          <span className="copyright">&#169; Copyright 2023. All rights reserved.</span>
        </div>
        <div className="right">
          <img src='/img/payment.png' alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Footer