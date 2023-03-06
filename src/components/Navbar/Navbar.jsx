import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux'

import './Navbar.scss'



const Navbar = () => {

  const [open, setOpen] = useState(false)
  const products = useSelector(state => state.cart.products)


  return (
    <div className='navbar'>
      <input type="checkbox" id="menu-toggle" />
      <label for="menu-toggle" class="menu">
        <MenuIcon />
      </label>
      <div className='wrapper'>
        <d  iv className='center'>
          <Link className='link' to='/'>FASHION FINDS</Link>
          <p>"We do not just deliver a product,  We deliver an experience!"</p>
        </d>
        <div className='right'>

          <div className="item">
            <Link className='link' to='/products/1'>BAGS</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/2'>WATCHES</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/3'>JEWELRY</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/4'>SHOES</Link>
          </div>
          


          <div className="icons">
              <SearchIcon/>
              <FavoriteBorderOutlinedIcon/>
              <PersonOutlineOutlinedIcon/>
            <div className="cartIcon" onMouseEnter={() => setOpen(!open)} onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  )
}


export default Navbar