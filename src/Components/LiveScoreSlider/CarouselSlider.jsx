import React, { useContext, useEffect } from "react";

import {
  ButtonBack,
  ButtonNext,
  DotGroup,
  Slide,
  Slider
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselContext } from "pure-react-carousel";

import styled from "styled-components";

import Arrow from "../../assets/svg/arrow.svg";
import Card from "./Card";
import useWindowSize from "../../hooks/windowSize";
import { useSelector } from 'react-redux';

const CarouselSlider = ({ setSlideCount, setCurrentSlide }) => {
  const screenWidth = useWindowSize();

  //pure-react-carousel context
  const carouselContext = useContext(CarouselContext);
  const homeData = useSelector(s => s?.homeReducer);
  let list = [];
 
  if (homeData?.data?.sections?.sport_daday_live_score) {
      list = homeData?.data?.sections?.sport_daday_live_score?.scorecard ?? []      ;

  }

  useEffect(() => {
    const updateCarouselSlide = (slideToBeVisible) => {
      const {
        currentSlide,
        totalSlides,
        visibleSlides
      } = carouselContext.state;

      setSlideCount(slideToBeVisible);

      //this is a fix to reset currentSlide when screen resizes
      if (
        currentSlide >= totalSlides - visibleSlides ||
        currentSlide >= totalSlides - slideToBeVisible
      ) {
        setCurrentSlide(totalSlides - slideToBeVisible);
      }
    };

    if (screenWidth < 832) {
      updateCarouselSlide(1);
    } else if (screenWidth < 1088) {
      updateCarouselSlide(2);
    }
    //>= 1088
    else {
      updateCarouselSlide(3);
    }
  }, [screenWidth, setSlideCount, setCurrentSlide, carouselContext]);

  return (
    <Wrapper>
      <Slider>
          {
            list ? list?.map(( scard, index) => {
              return (
                <Slide index={0} className="slide" key={ Date.now() + index }>
                  <Card index={0}  scard={ scard }/>
                </Slide>
              )
            })
            : null
          }
        {/* <Slide index={0} className="slide">
          <Card index={0} />
        </Slide>
        <Slide index={1}>
          <Card />
        </Slide>
        <Slide index={2}>
          <Card />
        </Slide>
        <Slide index={3}>
          <Card />
        </Slide>
        <Slide index={4}>
          <Card />
        </Slide>
        <Slide index={5}>
          <Card />
        </Slide> */}
      </Slider>
      <div className="controls">
        <ButtonBack className="btn-arrow reverse-arrow">
          <img src={Arrow} alt="arrow" />
        </ButtonBack>
        <DotGroup className="dot-group" />
        <ButtonNext className="btn-arrow">
          <img src={Arrow} alt="arrow" />
        </ButtonNext>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .controls {
    display: flex;
    align-items: center;
    justify-content: center;

    .btn-arrow {
      border: none;
      background: none;
      padding: 11px 20px;
    }

    .reverse-arrow {
      transform: rotateY(180deg);
    }

    .dot-group {
      display: flex;
      align-items: center;
      justify-content: center;

      .carousel__dot {
        width: 8px;
        height: 8px;
        border: none;
        border-radius: 50%;
        margin: 0 4px;
        padding: 0;
        background-color: #c3c4ca;
      }

      /* This class is found in DotGroup from pure-react-carousel */
      /* We need to override it to add our styles */
      .carousel__dot--selected {
        width: 16px;
        height: 8px;
        border-radius: 10px;
        background-color: #6267a1;
        transition: background 0.4s ease;
      }
    }
  }
`;

export default CarouselSlider;
