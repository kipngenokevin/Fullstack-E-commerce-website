import React from 'react'
import './Shipping.scss'

const Shipping = () => {
  return (
    <div className='shipping'>
      <h1>Shipping Policy</h1>
      <hr></hr>
      <br></br>
      <br></br>
      <img src='https://images.pexels.com/photos/5025667/pexels-photo-5025667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='shipping'/>
      <br></br>
      <br></br>
      <p>Our goal is to offer you the best shipping options, no matter where you live. Every day, we serve tens of thousands of customers worldwide, ensuring that we provide the highest levels of responsiveness to you at all times.</p>
      <br></br>
      <br></br>
      <p>The time frame for order delivery is divided into two parts:</p>
      <br></br>
      <ul>
        <li>Processing time: Order verification, quality check and packaging. All orders are sent to the fulfillment center for dispatch within 48- 72 hours after the order is placed.</li>
        <li>Shipping time: This refers to the time it takes for items to be shipped from our fulfillment center to the destination.</li>
      </ul>
      <br></br>
      <br></br>
      <table>
        <tr>
          <th>Method</th>
          <th>Distribution logistics</th>
          <th>Shipping Time</th>
          <th>Price</th>
          <th>Free Shipping</th>
        </tr>
        <tr>
          <td>Standard Shipping</td>
          <td>Third Party Shipping Services</td>
          <td>8-21 Business Days</td>
          <td>0</td>
          <td>All</td>
        </tr>
      </table>
      <br></br>
      <br></br>
      <p>Note: Due to Covid-19, Seasonal variations in shipping services there might be some delay on the delivery. Kindly note that in such cases, it will be communicated to the client accordingly.</p>


    </div>
  )
}

export default Shipping