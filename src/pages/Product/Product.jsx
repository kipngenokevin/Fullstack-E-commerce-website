import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { addToCart } from '../../redux/cartReducer';




const Product = () => {

  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("Product_Image_File_1");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch()

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
              <img src={data?.attributes?.Product_Image_File_3} alt='' onClick={(e) => setSelectedImg("Product_Image_File_3")} />
            </div>
            <div className="mainImg">
            <img src={data?.attributes?.[selectedImg]}/>
            </div>

          </div>

          <div className="right">
            <h1>{data?.attributes?.Product_Name}</h1>
            <span className='price'>${data?.attributes?.Sale_Price}</span>
            <p>
            {data?.attributes?.Product_Description}
            </p>
            <div className="quantity">
              <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className='add' onClick={()=>dispatch(addToCart({
              id: data.id,
              title: data.attributes.Product_Name,
              desc: data.attributes.Product_Description,
              img: data.attributes.Product_Image_File_1,
              price: data.attributes.Sale_Price,
              quantity
            }))}>
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
              <span>Vendor: {data?.attributes?.Brand_Name}</span>
              <span>Product Type: {data?.attributes?.Child_Category}</span>
              <span>Tag: {data?.attributes?.Grandchild_Category}</span>
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