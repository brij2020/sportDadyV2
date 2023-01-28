import * as React from 'react';
import "./index.css"
const MatchSchedule = (props) => {


	return(
		 <div className="blog-slider">
        <div className="blog-slider__wrp swiper-wrapper">

        {
        	props?.data?.map((slide, i)=> {
        			return(
        				<>
			<div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              
              <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" alt="" />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">26 December 2019</span>
              <div className="blog-slider__title">Lorem Ipsum Dolor</div>
              <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
              <a href="#" className="blog-slider__button">READ MORE</a>
            </div>
          </div>
          
        				</>)
        	})
        }
          
          
          
        </div>
        <div className="blog-slider__pagination"></div>
      </div>

	)
} 

export default MatchSchedule;