import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Cart.scss'

const Cart = () => {

   const data = [
    {
      id: 1,
      img: 'https://www.bragmybags.to/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/y/c/ycc24gonon.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://www.bragmybags.to/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/y/c/ycc24gonon-1.jpg',
      desc: '',
      title: 'Saint Laurent College Medium All Black Matelasse Leather Bag',
      oldPrice: 23,
      price: 12.30
    },
    {
      id: 2,
      img: 'http://www.hothandbag.cn/UploadFile/20220225/JIL SANDER-shoes-JSX00019-02.jpg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'http://www.hothandbag.cn/UploadFile/20220225/JIL SANDER-shoes-JSX00019-01.jpg?auto=compress&cs=tinysrgb&w=1600',
      desc: '',
      title: 'Jil Sander shoes JSX00019 Heel 8CM',
      oldPrice: 25,
      price: 23
    },
   ] 

  return (
    <div className='cart'>
        <h1>Products in Your Cart</h1>
        {data?.map(item=>(
            <div className="item" key={item.id}>  
                <img src={item.img} alt=""/>
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">1 x Ksh {item.price}</div>
                </div>
                <DeleteOutlineIcon className='delete'/>
            </div>
        ))} 
        <div className="total">
            <span>SUBTOTAL</span>
            <span>Ksh 2000</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart