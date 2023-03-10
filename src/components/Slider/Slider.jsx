import React, { useState } from 'react'
import './Slider.scss'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import {Routes, Route, useNavigate} from 'react-router-dom';


// Import Swiper styles

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();
  const navigateToProducts = () => {
    // 👇️ navigate to /products
    navigate('/products/1');
  };



  const data = [
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    'https://images.unsplash.com/photo-1604025940862-ee1fa5d60347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1569397288884-4d43d6738fbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.pexels.com/photos/4173108/pexels-photo-4173108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/4127632/pexels-photo-4127632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.unsplash.com/photo-1524677380467-30abe3c55345?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.pexels.com/photos/7319313/pexels-photo-7319313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',


  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };


  return (
    <div className='slider'>
      <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        <img src={data[0]} alt='' />
        <img src={data[1]} alt='' />
        <img src={data[2]} alt='' />
        <img src={data[3]} alt='' />
      </div>
      <div className='landing-text'>
          <h1> We Understand Style</h1>
          <h4> Discover a new world of class</h4>
          <button onClick={navigateToProducts}>Start Shopping</button>
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowBackOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardOutlinedIcon />
        </div>
      </div>

    </div>
  );
}

export default Slider