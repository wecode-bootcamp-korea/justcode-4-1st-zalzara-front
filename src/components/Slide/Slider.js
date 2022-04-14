import React, { useState } from 'react';
import './Slider.css';
import BtnSlider from './btnSlider';
// import dataSlider from './dataSlider';
import img1 from '../Slide/Images/mainImg1.jpg';
import img2 from '../Slide/Images/mainImg2.jpg';
import img3 from '../Slide/Images/mainImg3.jpg';
import img4 from '../Slide/Images/mainImg4.jpg';

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const imgSlide = [img1, img2, img3, img4];

  const nextSlide = () => {
    if (slideIndex !== imgSlide.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === imgSlide.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(imgSlide.length);
    }
  };

  const moveDot = index => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {imgSlide.map((obj, index) => {
        return (
          <>
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? 'slide slide-active' : 'slide'
              }
            >
              <img src={'http://localhost:3000' + img1} />
              {/* <img src={'http://localhost:3000' + `/Images/mainImg${index + 1}.jpg`} /> */}
            </div>
          </>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />

      <div className="container-dots">
        {Array.from({ length: 4 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          ></div>
        ))}
      </div>
    </div>
  );
}
