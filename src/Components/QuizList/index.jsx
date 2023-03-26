
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide,  } from 'swiper/react';
import 'swiper/css';
import './quizeList.css'
import Heading from "../Heading"
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import WinH from '../../assets/images/win-slide/prize.jpg';
import WinS from '../../assets/images/win-slide/win.jpeg';
import WinSS from '../../assets/images/win-slide/wwe.jpg';

import SPLOGO from '../../assets/logo/logo.png';


// import required modules
import SwiperCore,{ Pagination, Navigation, Autoplay} from 'swiper';
const Card = ({winslide}) => {
    const toThePage = () => {
       window.location.href = winslide?.link;
    }
    
    return(<> 
    <a href='#' onClick={toThePage}>
    <div class="card-winner card--animation card--ripple card--ripple-animated">
        <div class="card-header">
            <div class="card-header__code">
            &nbsp;
            </div>
            <div class="card-header__name">
                {winslide?.text} 
            </div>
            <div class="card-header__symbol">
                <img src={SPLOGO} />
            </div>
        </div>

        <div class="card-content">
            <div class="card-content__symbol">
                <img src={winslide?.img} alt="" style={{
                    widht:"80%",
                    hight:"80%"
                }} />
            </div>
        </div>

        <div class="card-footer">
            <div class="card-footer__name">
            &nbsp;
            </div>
            <div class="card-footer__code">
                &nbsp;
            </div>
            <div class="card-footer__symbol">
                <img src={SPLOGO} alt="" />
            </div>
        </div>
    </div>
   </a> </>)
}
const QuizeLit = (props) => {
    // Start
    let [ slides, setSlides] = React.useState(
        [
            {
                img: WinH,
                text: 'Win cash prize ',
                link:'/quiz'
            },
            {
                text: 'Quize game 100% Prize ',
                img: WinS,
                link:'/quiz'

            },
            {
                text: 'Winner of last week is Deepak D',
                img: WinSS,
                link:'/quiz'

            }

        ]
    );
    const [divRef, { entry }] = useIntersectionObserver();
    const isVisible = entry && entry.isIntersecting;
  
    React.useEffect(() => {
      console.log(`The component is ${isVisible ? 'visible' : 'not visible'}.`, isVisible);
    }, [isVisible])
    SwiperCore.use([Autoplay])
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    console.log(slides,'slides')
    return (
        <>
        <Heading primaryHeading={'Quize Game (Win gift)'} ballImageLeftPercent={15} visibility={isVisible} />
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation,Autoplay]}
                className="mySwiper"
                ref={divRef}
            >
                {
                    slides?.map((winslide, i) => {
                    return(<SwiperSlide key={i}>
                        <Card winslide={winslide} />
                    </SwiperSlide>)})
                }

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );

}
export default QuizeLit;