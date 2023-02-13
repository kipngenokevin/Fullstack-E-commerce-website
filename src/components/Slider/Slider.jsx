import React, { useState } from 'react'
import './Slider.scss'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

// Import Swiper styles

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    'http://www.hothandbag.cn/UploadFile/20220803/Valentino-Shoes-VOS00131-1.jpg',
    'http://www.hothandbag.cn/UploadFile/20220803/Valentino-Shoes-VOS00143-1.jpg',
    'http://www.hothandbag.cn/UploadFile/20220608/Vacheron Constantin-Watch-VTW00020-4-1.jpg'   
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