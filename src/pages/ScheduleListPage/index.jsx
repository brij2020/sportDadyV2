import * as React from 'react'
import './schList.css'
import Card from '../../Components/Card'
import PageHeading from '../../Components/pageHead'

const ScheduleList = (props) => {
    return (<>
            <PageHeading heading={'Main Head'} />
            <nav class="cb-schdl-nvtb" role="navigation" gtm-label="full schedule">
                <a class="cb-nav-pill-1 cb-font-12 active" id="international-tab" href="/cricket-schedule/upcoming-series/international">International</a>  
                <a class="cb-nav-pill-1 cb-font-12 " id="league-tab" href="/cricket-schedule/upcoming-series/league">IPL</a> 
                <a class="cb-nav-pill-1 cb-font-12 " id="women-tab" href="/cricket-schedule/upcoming-series/women">Women</a> 
                <a class="cb-nav-pill-1 cb-font-12 " id="all-tab" href="/cricket-schedule/upcoming-series/all">All Matches</a>
            </nav>
            <div class="fixture-tab-inner row">
                <Card />
            </div>
    </>)
}

export default ScheduleList;