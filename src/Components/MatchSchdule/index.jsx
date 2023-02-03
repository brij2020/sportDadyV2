import * as React from 'react';
import "./index.css"
const MatchSchedule = (props) => {


	return(
		 <div className="blog-slider">
        <div className="blog-slider__wrp swiper-wrapper">

        {
        	props?.data?.map((slide, i)=> {
        		console.log('slide', slide)
        			return(
        				<>
			    <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
               <div className='d-flex' style={{ 
               	flexDirection: "row",
    			      marginTop: "95px"
               }}>
                <img src={slide.img} style={{
                  width: "100px",
                  height: "100px",
                  marginLeft: "28px",
                      borderRadius: 80
                }}></img>
                <h4 style={{
                  alignSelf: 'center',
                  marginRight: 5,
                  marginTop: 5
                }}>
                  V/S
                </h4>
                <img src={slide.img2} style={{
                  width: "100px",
                  height: "100px",
                  marginRight: "5px",
                  borderRadius: 80
                
                }}></img>
                      </div>
              {/*<img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" alt="" />*/}
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">{slide?.date_2}</span>
              <div className="blog-slider__title">{slide?.heading}</div>
              <div className="blog-slider__text">{slide?.player} </div>
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