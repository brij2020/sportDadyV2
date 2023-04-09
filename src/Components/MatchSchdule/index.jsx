import * as React from 'react';
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import Heading from "../Heading"
import { useSelector } from 'react-redux'
import Anchor from '../Anchor'
import dayjs from 'dayjs';
// import required modules
import SwiperCore,{ Pagination, Navigation, Autoplay} from 'swiper';
import './index.css'
import '../Card/fixtures.css'
const utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

const MatchSchedule = (props) => {
  const [divRef, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  React.useEffect(() => {
    // console.log(`The component is ${isVisible ? 'visible' : 'not visible'}.`, isVisible);
  }, [isVisible])

  const homeData = useSelector(s => s?.homeReducer);
  let scheduleList = [];
 
  if (Array.isArray(homeData?.data?.sections?.sport_daday_cricket_schedule)) {
    scheduleList = homeData?.data?.sections?.sport_daday_cricket_schedule?.slice();
    
  }
  React.useEffect(() => {
    
    setTimeout(() => {
      var swiper = new SwiperCore('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
          invert: false,
        },
        // autoHeight: true,
        pagination: {
          el: '.blog-slider__pagination',
          clickable: true,
        }
      });
    },1000)
  },[])
  return (<>
    <Heading primaryHeading={'Cricket Schedule'} ballImageLeftPercent={4} visibility={isVisible} />

    <div className="blog-slider" ref={divRef}>
      <div className="blog-slider__wrp swiper-wrapper">

        {
          scheduleList?.map((match, i) => {
              return (
                <>
                  <div className="blog-slider__item swiper-slide fixture-card-main" key={i+ `${new Date()?.toDateString }`}>
                    {/* <div className="blog-slider__img"> */}
                    <div class="blog-slider__im  justify-content-between d-flex">
                      <div class="match-country-info ">
                        <div class="match-img-bg home-schedule " >
                          <div class=" home-sch-img">
                            <img ng-src={match.team1?.thumb} alt="India" class="igm-fluid" src={match.team1?.thumb} />
                          </div>
                        </div>
                        <h5 class="country-name ng-binding ng-scope home-country-name" >{match.team1?.teamSName}</h5>
                      </div>
                      <div class="small-seprator">vs</div>

                      <div class="match-country-info">
                        <div class="match-img-bg home-schedule">
                          <div class=" ng-scope home-sch-img " >
                            <img ng-src={match.team2?.thumb} alt="Australia" class="igm-fluid" src={match.team2?.thumb} />
                          </div>
                        </div>
                        <h5 class="country-name ng-binding ng-scope home-country-name" ng-if="list.AwayTeamName != undefined &amp;&amp; list.AwayTeamName != ''">{match.team2?.teamSName}</h5>

                      </div>
                    </div>
                    
                    <div className="blog-slider__content">
                      <span className="blog-slider__code">{dayjs(+match.startDate)?.format('HH:mm A')} | IST / {dayjs.utc(+match.startDate)?.format('HH:mm A')} | UTC</span>
                      <div className="blog-slider__title">{match?.heading} {dayjs(+match.startDate).format('ddd, MMMM DD YYYY')}</div>
                      <div className="blog-slider__text">{match?.seriesName} </div>
                      <Anchor to={'fixtures'} text = {'View MORE'} classname='blog-slider__button' />
                      {/* <a href="#" className="blog-slider__button">View MORE</a> */}
                    </div>
                  </div>

                </>
            )

          })
        }



      </div>
      <div className="blog-slider__pagination"></div>
    </div>

  </>)
}

export default MatchSchedule;