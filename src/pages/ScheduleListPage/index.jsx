import * as React from 'react'
import './schList.css'
import Card from '../../Components/Card'
import PageHeading from '../../Components/pageHead'
import { useDispatch, useSelector } from 'react-redux';
import { getMatchScheduleListAction } from '../../store/slice/schedule/schedule.slice'

const ScheduleList = (props) => {
    const dispatch = useDispatch();
    React.useState(() => {
        dispatch(getMatchScheduleListAction({
            pageno: 1,
            perpage: 10,
            matchtype: 'international'
        }))
    }, [])
    //international','league','domestic','women']
    const [tabConfig, setTab] = React.useState([{ id: "international-tab", tabName: 'International', hasId: 'GHS90898', isActive: true }, { id: "league-tab", tabName: 'League', hasId: 'GAH9189', isActive: false }, { id: "women-tab", tabName: 'Women', hasId: 'FZX2AH9', isActive: false }, { id: "domestic-tab", tabName: 'Domestic', hasId: 'DOMH9189', isActive: false }])
    const fetchSchduledata = (event) => {

        let matchtype = event?.target?.id?.split('-tab').shift();

        dispatch(getMatchScheduleListAction({
            pageno: 1,
            perpage: 10,
            matchtype: matchtype ?? 'international'
        }));
        setTab(tabConfig.slice().map(t => event?.target?.id === t.id ? ({ ...t, ...{ isActive: true } }) : ({ ...t, ...{ isActive: false } })));
    }
    return (<>
        <PageHeading heading={'Cricket Schedule'} />
        <nav class="cb-schdl-nvtb" role="navigation" gtm-label="full schedule">
            {
                tabConfig?.map(tab => (<a key={tab?.hasId} className={`cb-nav-pill-1 cb-font-12 ${tab?.isActive ? 'active' : ''}`} id={tab?.id} onClick={fetchSchduledata} >{tab?.tabName}</a>))
            }

            {/* <a className="cb-nav-pill-1 cb-font-12 " id="league-tab" data-src="league" onClick={fetchSchduledata}>League/Domestic</a> 
                <a className="cb-nav-pill-1 cb-font-12 " id="women-tab" data-src="women" onClick={fetchSchduledata}>Women</a>  */}

        </nav>
        <div class="fixture-tab-inner row">
            <Card />
        </div>
    </>)
}

export default ScheduleList;