import React, { useState } from 'react'
import './Checkout.scss'
import CheckoutForm from '../../components/checkoutForm/checkoutform'
import { useSelector } from 'react-redux'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Hidden } from '@mui/material';
import {Routes, Route, useNavigate} from 'react-router-dom';


const Checkout = () => {

    {/*===============LoAding Products ===========*/ }

    const dispatch = useDispatch()
    const products = useSelector(state => state.cart.products)
    console.log(products)
    const map= new Map(products.map((obj) => [obj.id, obj.title, obj.price]));
    //console.log(map)
    var obj = Object.fromEntries(map);
    var jsonString = JSON.stringify(obj);
    
    const totalPrice = () => {
        let total = 0
        products.forEach(item => total += item.quantity * item.price)
        return total.toFixed(2)
    }

    {/**=====End of loading products ==========*/ }


    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        Location: '',
        Order: jsonString
    })

    const [value, SetOrder] = useState ({
        Order: ''
    })


    const inputs = [

        {
            id: 1,
            name: 'firstname',
            type: 'text',
            placeholder: 'First Name',
            errorMessage:'',
            label: 'First Name'
        },
        {
            id: 2,
            name: 'lastname',
            type: 'text',
            placeholder: 'Last Name',
            errorMessage:'',
            label: 'Last Name'
        },
        {
            id: 3,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            errorMessage:'Please enter a valid email address',
            label: 'Email',
        },
        {
            id:4,
            name: 'Phone',
            type: 'text',
            placeholder: 'Phone Number',
            errorMessage:'Please input a valid phone number',
            label: 'Mobile',
            pattern: "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
        },
        {
            id:5,
            name: 'Location',
            type: 'text',
            placeholder: 'Location',
            errorMessage:'',
            label: 'Address'
        } ,
        {
            id:6,
            name: 'Order',
            type: 'textarea',
            hidden: true
        }     


    ]

    const navigate = useNavigate();
    const navigateToSuccess = () => {
      // 👇️ navigate to /contacts
      navigate('/success');
    };

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        // service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service 
        emailjs.sendForm('service_16i8b08', 'template_qa1u30a', form.current, 
        'b7nGxZhvRW1XQI9hh')
          .then((result) => {
              console.log(result.text);
              navigateToSuccess();
              dispatch(resetCart());

          }, (error) => {
              console.log(error.text);
          });
        };

    const onChange = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }
    //console.log(values)

    return (
        <div className='checkout'>



            {/*=======Displaying Items on the checkout page ========*/}
            <div className='left'>
                <h1>Items in Cart</h1>
                {products?.map(item => (
                    <div className="item" key={item.id}>
                        <img src={item.img} alt="" />
                        <div className="details">
                            <h1>{item.title}</h1>
                            <p>{item.desc?.substring(0, 100)}</p>
                            <div className="price">{item.quantity} x Ksh {item.price}</div>
                        </div>

                        <DeleteOutlineIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
                    </div>
                ))}

                <div className="total">
                <h3>
                    <span>SUBTOTAL</span>
                    <span>${totalPrice()}</span>

                </h3>
                </div>
                <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
                <div className='payment'>
                    <h3>Payment Methods</h3>
                    <p>Payment is before Delivery</p>
                    {/*======= Email =======*/}
                    
                </div>

            </div>


            {/*======== End of displaying items =====*/}

            {/*========= Displaying the form =======*/}

            <div className='right'>
                <form ref={form} onSubmit={sendEmail}>
                <h1>Checkout Details</h1>
                    {inputs.map(input=>(
                        <CheckoutForm
                         key={input.id}
                          {...input} 
                          value={values[input.name]}
                            onChange={onChange}
                          />
                    ))}
                   
                    <button type='submit'>Submit</button>
                </form>
            </div>

            {/*=========== End of Diplaying the Form ==============*/}

        </div>
    )
}

export default Checkout