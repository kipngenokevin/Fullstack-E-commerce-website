import React, { useState } from 'react'
import './Slider.scss'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

// Import Swiper styles

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    'https://images.pexels.com/photos/5698981/pexels-photo-5698981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/6923263/pexels-photo-6923263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/6659411/pexels-photo-6659411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'   
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };


  return (
    <div className='slider'>
      <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt=''/>
        <img src={data[1]} alt=''/>
        <img src={data[2]} alt=''/>
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowBackOutlinedIcon/>
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardOutlinedIcon/>
        </div>
      </div>
    </div>
  );
}

export default Slider