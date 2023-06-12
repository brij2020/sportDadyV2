import * as React from 'react';
import "./index.css"
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide,  } from 'swiper/react';

import SwiperCore,{ Pagination, Navigation, Autoplay} from 'swiper';
import 'swiper/css';
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import Heading from "../../Components/Heading"

const TimeLine = (props) => {
	const homeData = useSelector(s => s?.homeReducer);
    let list = [];
	const [cricketTimeLine, setCricketTimeLine] = React.useState(list);
	const [ list_, setlist] = React.useState([])
   
    if (homeData?.data?.sections?.sport_daday_event_time_Line) {
        list = homeData?.data?.sections?.sport_daday_event_time_Line;
    }
	const [divRef, { entry }] = useIntersectionObserver();
    const isVisible = entry && entry.isIntersecting;

    React.useEffect(() => {
        console.log(`The component is ${isVisible ? 'visible' : 'not visible'}.`, isVisible);
    }, [isVisible])
	
	React.useEffect(() => {
		setTimeout(()=>{
			var timelineSwiper = new SwiperCore ('.timeline .swiper-container', {
				direction: 'vertical',
				loop: false,
				speed: 1600,
				pagination: '.swiper-pagination',
				paginationBulletRender: function (swiper, index, className) {
				var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
				return '<span class="' + className + '">' + year + '</span>';
				},
				modules: [Navigation, Pagination],
				paginationClickable: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				  },
				// nextButton: '.swiper-button-next',
				// prevButton: '.swiper-button-prev',
				
				breakpoints: {
				768: {
					direction: 'horizontal',
				}
				}
			});
	  },200)

	},[list])

	const static_ = 'http://52.205.83.44:1337';
	
	return(
	<>
	<section className="video-home-section" style={{ padding: "5px 5px 5px", "border-raduis": "10px" }} ref={divRef}>
		<Heading primaryHeading={'ODI World Cup Timeline'} ballImageLeftPercent={5}  visibility={isVisible}/>
		<div class="containerTimeLine">
			
			<div class="timeline">
				<div class="swiper-container">
				<div class="swiper-wrapper">
					{
						list && list?.map(o => {
							return(
								<div class="swiper-slide" 
									key={ o?.id }	
								
									
									>
									<img 
									src={static_ + o?.thumb}
									style={{
										backgroundPosition: 'center !important;',
										backgroundSize: 'contain;',
										backgroundRepeat: 'no-repeat !important;'
									}} 
									/>
									<div class="swiper-slide-content">
										<span class="timeline-year">{
										o?.Year?.split("-")?.[0]
									}</span>
										<h6 class="timeline-title">{o?.event_Name }</h6>
										<p class="timeline-text">{o?.Final_Match_Heighlight}</p>
									</div>
								</div>
							)
						})
					}
				</div>
				<div class="time-line swiper-button-prev"></div>
				<div class="time-line swiper-button-next"></div>
				<div class="time-line swiper-pagination"></div>
				</div>
			</div>
		</div>

        <div className="more-news">
          <a href="/videos">More TimeLine </a></div>
		</section>
	</>)
}
export default TimeLine;
