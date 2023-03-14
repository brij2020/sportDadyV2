import * as React from 'react';
import PageHeading from '../../Components/pageHead';
import './liveTv.css'
import LiveCommentry from './LiveCommentry';

import ScoreCard from './ScoreCard';

// import './liveCommentry.css'
const LiveTv = (props) => {
    const [liveTvOn, setLiveTive] = React.useState(false)
    const onLiveScore = (e) => {
        setLiveTive(!liveTvOn);
    }
    return (<>
        <div class="fixture-tab-inner row  live-tv-page">
            <PageHeading heading={'Live Score'} />
            <div class='tv'>
                <div class='tv-border-outer '>
                    <div class={`tv-border-inner ${liveTvOn ? 'on' : 'off'}`} id="wrapper-live-tv" >
                        <div class='tv-screen' id="screen1">
                            <div class='logo-lv live-tv logo'></div>
                            {/* <div id="channel"></div>
                            <div id="text-live-score">Sport Daday Cricket</div> */}
                            <div id="content-holder">
                                <div id="content">
                                    <div id="app">
                                        <div id="channel">AV1</div>
                                        <div id="text-live-score">No input signal.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        liveTvOn ? (<>
                            <div class='blue-led'></div>
                            <div class='plastic-logo'>
                                IND 571 |
                                AUS 480 & 3/0 (6)
                            </div>
                        </>
                        ) : (
                            null
                        )
                    }

                </div>
                <div class='stand-bar'></div>
                <div class='stand-base'></div>
                {/* <button type="button" class="btn top-navigate power" id="power"></button> */}
                <div role='button' onClick={onLiveScore} class={`btn top-navigate power ${liveTvOn?' power-on':''}`} id="power"></div>
            </div>
            <ScoreCard />
            <LiveCommentry />
        </div>
    </>
    )
}
export default LiveTv;