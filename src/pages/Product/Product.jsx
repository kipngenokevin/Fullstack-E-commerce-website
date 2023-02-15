import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';




const Product = () => {

  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("Product_Image_File_1");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  //console.log(data)
  const good = selectedImg
  console.log(good)

  return (
    <div className='product'>
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img 
                src={data?.attributes?.Product_Image_File_1} 
                alt="" 
                onClick={(e) => setSelectedImg("Product_Image_File_1")}
                 />
              <img src={data?.attributes?.Product_Image_File_2} alt='' onClick={(e) => setSelectedImg("Product_Image_File_2")} />
            </div>
            <div className="mainImg">
            <img src={data?.attributes?.[selectedImg]}/>
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
        </>
      )}
    </div>
  )
}

export default Product