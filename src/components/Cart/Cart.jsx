import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Cart.scss'

const Cart = () => {

   const data = [
    {
        id: 1,
        img: 'https://images.pexels.com/photos/7755459/pexels-photo-7755459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        img2: 'https://images.pexels.com/photos/8580001/pexels-photo-8580001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Summer Dress',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend, mauris ut accumsan eleifend, magna erat fringilla tellus, sed pulvinar velit diam nec mauris. ',
        isNew: true,
        oldPrice: 13,
        price: 9.99
      },
      {
        id: 2,
        img: 'https://images.pexels.com/photos/12698490/pexels-photo-12698490.jpeg?auto=compress&cs=tinysrgb&w=1600',
        title: 'Kimono dress',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend, mauris ut accumsan eleifend, magna erat fringilla tellus, sed pulvinar velit diam nec mauris. ',
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