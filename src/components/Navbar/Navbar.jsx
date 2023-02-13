import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import Cart from '../Cart/Cart';

import './Navbar.scss'



const Navbar = () => {

  const [open, setOpen] = useState(false)


  return (
    <div className='navbar'>
      <input type="checkbox" id="menu-toggle" />
      <label for="menu-toggle" class="menu">
          <MenuIcon/>
      </label>   
      <div className='wrapper'>     
        <div className='left'>
          <div className="item">
            <Link className='link' to='/products/1'>Bags</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/1'>Watches</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/2'>Jewlery</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/3'>Shoes</Link>
          </div>
        </div>
        <div className='center'>
          <Link className='link' to='/'>FASHION FINDS</Link>
        </div>
        <div className='right'>
          <div className='item'>
            <Link className='link' to='/'>HomePage</Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>About</Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>Contact</Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}


export default Navbar