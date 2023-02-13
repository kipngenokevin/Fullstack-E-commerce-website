import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {

  const [selectedImg, setselectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    'https://www.bragmybags.to/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/y/c/ycc24gonon.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://www.bragmybags.to/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/y/c/ycc24gonon-1.jpg',

  ]

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt='' onClick={e => setselectedImg(0)} />
          <img src={images[1]} alt='' onClick={e => setselectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt='' />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed pharetra urna, eget dictum arcu.
          Nunc lorem mauris, fermentum vitae purus vitae, lacinia euismod augue.
          Donec gravida dolor vitae purus suscipit venenatis. Morbi ut lobortis eros. Maecenas sed dapibus felis.
        </p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: Hoodie</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION </span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>

    </div>

  )
}

export default Product