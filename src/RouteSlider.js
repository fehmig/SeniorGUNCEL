import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RouteSlider = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500 // Otomatik geçiş hızı (ms cinsinden)
      };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img style={{width:600, height:300,margin:'auto', objectFit: "cover", justifyContent:'center', marginTop:"2%"}} src={image} alt="Slide"  />
        </div>
      ))}
    </Slider>
  );
};

export default RouteSlider;
