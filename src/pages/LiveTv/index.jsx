import * as React from 'react';
import PageHeading from '../../Components/pageHead';
import './liveTv.css'
import LiveCommentry from './LiveCommentry';

import ScoreCard from './ScoreCard';
// import { SocketContext } from '../../socket';
import { liveScoreAction } from '../../store/slice/liveScore/liveScore.slice';
import { useGetQuery } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux';
import file from '../../assets/audio/speech_20230422070846636.mp3'
import { makeAudio } from '../../util';
// import './liveCommentry.css'
const LiveTv = (props) => {
    const [liveTvOn, setLiveTive] = React.useState(false);
    let [ matchId, setMatchId] =  useGetQuery('matchId');
    const liveData = useSelector(s => s?.liveScoreReducer )
    let dispatch = useDispatch()
    const [isSocketConneted, setIsConnected] = React.useState(false)
    const onLiveScore = (e) => {
        setLiveTive(!liveTvOn);
    }

//   const socket = React.useContext(SocketContext);
  React.useEffect(() => {
    

    // function onConnect() {
    //     setIsConnected(true);
    //   }
  
    //   function onDisconnect() {
    //     setIsConnected(false);
    //   }
  
    //   function liveScoreUppdate(data) {
    //         console.log(data)
    //   }
  
    //   socket.on('connect', onConnect);
    //   socket.on('disconnect', onDisconnect);
    //   socket.on('livescore-update', liveScoreUppdate);
  
    //   return () => {
    //     socket.off('connect', onConnect);
    //     socket.off('disconnect', onDisconnect);
    //     socket.off('livescore-update', liveScoreUppdate);
    //   };
   let aud =  makeAudio(file);
   setTimeout(() => {
    aud?.play()
   },1000)
  },[])
  

const getData = async () => {
    try {

      dispatch(liveScoreAction(matchId));   
    } catch (e) {
      console.log(e);
    }
  };

 React.useEffect(() => {
    getData();
    const intervalCall = setInterval(() => {
      getData();
    }, 10000 );
    

    return () => {
      // clean up
      clearInterval(intervalCall);
    };
  }, []);
  console.log(liveData?.data)
  const [tvEvent, setTvEvent] = React.useState('Live');

  const getRunOnBall = (cmt)  => {
    let runOnBall = ''; 
    if(cmt?.match(/1 run/)?.length > 0 ) {
       runOnBall = 1
    } else if(cmt?.match(/2 run/)?.length > 0 ) {
       runOnBall = 2
    } else if( cmt?.match(/3 run/)?.length > 0) {
       runOnBall = 3
    } else if( cmt?.match(/no run/)?.length > 0) {
       runOnBall = 0
    }
     return runOnBall
 }
 


  React.useEffect(() => {
    let commentryList = liveData?.data?.liveScoreData?.commentary;
    console.log('rerender')
    
    if(commentryList && Array.isArray(commentryList)) {

       let { commentary = {
          eventType: ''
       }} = commentryList[0] ?? {
          eventType: ''
        };
       
       let eveRunW = commentary?.eventType === 'WICKET' ? "W" : commentary?.eventType?.includes('SIX') ? 6 : commentary?.eventType === 'FOUR' ? 4 : getRunOnBall(commentary?.commText?.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ' ')?.replace(/B0/g, ' '));
       setTvEvent(eveRunW)
       setTimeout(() => {
        setTvEvent('Live')
       },10000)
       console.log('re render', eveRunW)
    }
    
 },[liveData?.data?.liveScoreData?.commentary ])

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
                                        <div id="text-live-score">{tvEvent === '' ? 'Live' : tvEvent }</div>
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
            <ScoreCard 
                matchHead={liveData?.data?.liveScoreData?.matchHeaders}
                miniScore={liveData?.data?.liveScoreData?.miniscore }
            />
            <LiveCommentry 
             miniScore={liveData?.data?.liveScoreData?.miniscore }
             commentryList = { liveData?.data?.liveScoreData?.commentary
             }
             getRunOnBall = { getRunOnBall }
            />
        </div>
    </>
    )
}
export default LiveTv;