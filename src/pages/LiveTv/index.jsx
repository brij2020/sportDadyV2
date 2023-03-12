import * as React from 'react';
import PageHeading from '../../Components/pageHead';
import './liveTv.css'

const LiveTv = (props) => {
    return (<>
        <div class="fixture-tab-inner row  live-tv-page">
            <PageHeading heading={'Live Score'} />
            <div class='tv'>
                <div class='tv-border-outer'>
                    <div class='tv-border-inner'>
                        <div class='tv-screen'>
                            <div class='logo live-tv'></div>
                        </div>
                    </div>
                    <div class='blue-led'></div>
                    <div class='plastic-logo'>
                        IND 571 |
                        AUS 480 & 3/0 (6)
                    </div>
                </div>
                <div class='stand-bar'></div>
                <div class='stand-base'></div>
            </div>
        </div>
    </>
    )
}
export default LiveTv;