/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Carousel.scss';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const MyCarousel = ({ images = [] }) => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        // autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        // infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style">
        {images.map((imageUrl, index) => {
          return (
            <div className="MyCarousel" key={index}>
              <img src={imageUrl} alt="movie" className="Carousel-img" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default MyCarousel;
