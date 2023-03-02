import * as React from 'react';
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import Heading from "../Heading"

const MatchSchedule = (props) => {
 const [divRef, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  React.useEffect(() => {
    console.log(`The component is ${isVisible ? 'visible' : 'not visible'}.`, isVisible);
  }, [isVisible])

	return(<>
    <Heading primaryHeading={'Cricket Schedule'} ballImageLeftPercent={4} visibility={isVisible}/>

		 <div className="blog-slider" ref={divRef}>
        <div className="blog-slider__wrp swiper-wrapper">

        {
        	props?.data?.map((slide, i)=> {
        
        			return(
        				<>
			       <div className="blog-slider__item swiper-slide">
                <div className="blog-slider__img">
               <div className='d-flex' style={{ 
               	flexDirection: "row"
               }}>
                <img src={slide.img} style={{
                  width: "90px",
                  height: "90px",
                  marginLeft: "28px",
                  marginTop: "50px",
                      borderRadius: 80
                }}></img>
                <h4 style={{
                  alignSelf: 'center',
                  paddingTop:"20%",
                  margin:"auto",
                  fontWeight: 600
                }}>
                  V/S
                </h4>
                <img src={slide.img2} style={{
                  width: "90px",
                  height: "90px",
                  marginRight: "5px",
                  marginTop: "50px",
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

	</>)
} 

export default MatchSchedule;