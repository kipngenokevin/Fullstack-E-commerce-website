import React from 'react'
import {Link} from 'react-router-dom'
import './Card.scss'

const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
    <div className='card'>
      <div className="image">
        <img src={item?.attributes?.Product_Image_File_1} alt="" className="mainImg" />
        <img src={item?.attributes?.Product_Image_File_2} alt="" className="secondImg" />
      </div>
      <h2>{item?.attributes.Product_Name}</h2>
      <div className="prices">
        <h3>${item?.attributes.Price}</h3>
        <h3>${item?.attributes.Sale_Price}</h3>
      </div>
    </div>
    </Link>
  )
}

export default Card