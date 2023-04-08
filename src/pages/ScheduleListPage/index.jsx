import * as React from 'react'
import './schList.css'
import Card from '../../Components/Card'
import PageHeading from '../../Components/pageHead'

import { useDispatch, useSelector } from 'react-redux';
import { getScheduleListAction } from '../../store/slice/schedule/schedule.slice';
import PhotoSkeleton from '../../Components/Skelton/PhotoSkeleton';

import { LoadMore } from '../../Components/LoadMore';

const ScheduleList = (props) => {

    const homeData = useSelector(s => s?.homeReducer);
    const scheduleData = useSelector(s => s?.scheduleListReducer);

    const dispatch = useDispatch()
    let scheduleList = [];    
    
    React.useEffect(() =>{
        if(typeof window !== 'undefined') {
            window.scrollTo(0, 0)
        }
        if(typeof homeData?.data?.sections === 'undefined' ) {
            dispatch(getScheduleListAction())
        }
    },[])

  if (Array.isArray(homeData?.data?.sections?.sport_daday_cricket_schedule)) {
        scheduleList = homeData?.data?.sections?.sport_daday_cricket_schedule?.slice(0,6);
  } else if(Array.isArray(scheduleData?.data?.data)) {
    scheduleList = scheduleData?.data?.data
  }
  const skeletonList = () => {
    return [1,2,4,5,].map(skeleton => {
        return( <div class="schedule-item pgt-seltn">
             <PhotoSkeleton />
         </div>)
     })
}

    return (<>
            <PageHeading heading={'Match Schedule'} />
            <nav class="cb-schdl-nvtb" role="navigation" gtm-label="full schedule">
                <a class="cb-nav-pill-1 cb-font-12 active" id="international-tab" href="/cricket-schedule/upcoming-series/international">International</a>  
                <a class="cb-nav-pill-1 cb-font-12 " id="league-tab" href="/cricket-schedule/upcoming-series/league">IPL</a> 
                <a class="cb-nav-pill-1 cb-font-12 " id="women-tab" href="/cricket-schedule/upcoming-series/women">Women</a> 
                <a class="cb-nav-pill-1 cb-font-12 " id="all-tab" href="/cricket-schedule/upcoming-series/all">All Matches</a>
            </nav>
            <div class="fixture-tab-inner row">
                <Card cards = { scheduleList } />
                {
                   Array.isArray(scheduleList) && scheduleList.length == 0 && skeletonList()
                }
            </div>
            <LoadMore />
    </>)
}

export default ScheduleList;