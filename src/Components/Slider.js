import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProdSlider.css";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default class ResponsiveSlider extends Component {
  render() {
    var settings = {
      draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    fade: true,
    speed: 500,
    infinite: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            // infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            // infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            // infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            // infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
          },
        },
      ],
    };
    return (
      <div className="slider__conatiner">
        {/* <ArrowBackIosIcon className="slider-backward-arrow" /> */}
        <i class="fas fa-chevron-left slider-backward-arrow"></i>
        {/* <ArrowForwardIosIcon className="slider-forward-arrow" /> */}
        <i class="fas fa-chevron-right slider-forward-arrow"></i>

        <Slider {...settings}>
           {
           	this.props.slides && this.props.slides.map((slide, i) => {
           		return (<div className="slider-card" key={i}><img className="d-block w-100 hh" src={slide?.url}  alt={slide?.url} /></div>)
           	})
           }
        </Slider>
      </div>
    );
  }
}

