import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Cart.scss'
import {useSelector} from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer';
import {useDispatch} from 'react-redux'
import {Routes, Route, useNavigate} from 'react-router-dom';

const Cart = () => {

  const dispatch = useDispatch()
  const products = useSelector(state=>state.cart.products)
  const totalPrice = ()=> {
    let total = 0
    products.forEach(item=>total+=item.quantity * item.price)
    return total.toFixed(2)
  }
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    // 👇️ navigate to /contacts
    navigate('/checkout');
  };

  return (
    <div className='cart'>
        <h1>Products in Your Cart</h1>
        {products?.map(item=>(
            <div className="item" key={item.id}>  
                <img src={item.img} alt=""/>
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">{item.quantity} x Ksh {item.price}</div>
                </div>
                
                <DeleteOutlineIcon className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
              
                
            </div>
        ))} 
        <div className="total">
            <span>SUBTOTAL</span>
            <span>${totalPrice()}</span>
        </div>
        <button onClick={navigateToCheckout}>PROCEED TO CHECKOUT</button>
        <span className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart