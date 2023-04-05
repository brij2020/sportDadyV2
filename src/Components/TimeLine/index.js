import * as React from 'react';
import "./index.css"
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide,  } from 'swiper/react';

import SwiperCore,{ Pagination, Navigation, Autoplay} from 'swiper';
import 'swiper/css';


import IndiaFlag from "../../assets/svg/india.jpg"

import PakFlag  from "../../assets/icons/flag2.png"
const timeLine = [
{
	lable: "India wins by 10 runs",
	wcountry: "India",
	rcountry: "Pakistan",
	year: "2007",
	flag: IndiaFlag
},
{
	lable: "Pakistan wins by 10 runs",
	wcountry: "England",
	rcountry: "Pakistan",
	year: "2009",
	flag: PakFlag
},
{
	lable: "Pakistan wins by 10 runs",
	wcountry: "England",
	rcountry: "Pakistan",
	year: "2011",
	flag: PakFlag
}, {
	lable: "Pakistan wins by 10 runs",
	wcountry: "England",
	rcountry: "Pakistan",
	year: "2013",
	flag: PakFlag
}, 
{
	lable: "Pakistan wins by 10 runs",
	wcountry: "England",
	rcountry: "Pakistan",
	year: "2015",
	flag: PakFlag
}
]



const TimeLine = (props) => {
	const homeData = useSelector(s => s?.homeReducer);
    let list = [];
	const [cricketTimeLine, setCricketTimeLine] = React.useState(list);
	const [ list_, setlist] = React.useState([])
   
    if (homeData?.data?.sections?.sport_daday_event_time_Line) {
        list = homeData?.data?.sections?.sport_daday_event_time_Line;
    }
	
	const static_ = 'http://52.205.83.44:1337';
	
	return(
	<>
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
	</>)
}
export default TimeLine;
