import * as React from 'react';
import { getVideoListAction } from '../../store/slice/video/video.slice'
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import './videoList.css';
import { LoadMore } from '../../Components/LoadMore'
const VideoList = (props) => {
    const dispatch = useDispatch();
 
    React.useEffect(() => {
        dispatch(getVideoListAction({
            pageno:1,
            perpage:10
        }))
    }, [])
    const articleList = useSelector(s => s?.videoListReducer);
    
    let list = [];
   
    if (articleList?.status && articleList?.data) {
        list = articleList?.data?.data

    }
    
    return (
        <section>
            <div class="_26yno _3wTW4 -PI7V">
                <div class="_3HqPn" style={{ "padding":"0px"}}>
                    <div style={{ display:"block"}}>
                        <h1 class="dY6Z4 uAvHw"><a href="/videos" clink="y">Videos</a></h1>
                        <div class="v-L4Y"></div>
                    </div>
                    <div class="_33iK5" id="story_videos"></div>
                </div>
                <section>
                    {
                        list && Array.isArray(list) ? list?.slice(0, 1).map(vlist => {
                            return (
                                <a href={`/videoshow?cmsuid=${vlist?.id}` } class="_1YzI9" clink="y" title="98547033">
                                <div>
                                    <div class="jUU9O _2IaDB _17N4N">
                                        <div class="_2g6Ty">
                                            <p>{vlist?.Title}</p>
                                        </div>
                                        <div class="_2tpi2">
                                            <img src={vlist?.thumb} data-src="https://static.tnn.in/thumb/msid-98547033,updatedat-1678455464717,width-360,height-203,resizemode-75/98547033.jpg" data-width="375" data-height="211" width="375" height="211" style={{"animation-name": "gracefulimage", animationDuration: "0.3s", "animation-iteration-count": 1, "animation-timing-function": "ease-in"}} alt={vlist?.Title} title="" pinger-seen="true" />
                                                <div class="_2N1Fj">
                                                    <svg class="icon-md">
                                                        <use xlinkHref="/assets/icons/svg/sprite-global.svg#video-player"></use>
                                                    </svg>
                                                </div>
                                                <div class="_3pRU0 undefined _2h5tT time-icon">
                                                    <i class="fa fa-play-circle-o" 

                                                                    style={{"font-size":"48px",color:"red",
                                                                    fontSize: "40px",
                                                                    color: "red",
                                                                    position: "absolute",
                                                                    top: "12%",
                                                                    right: "13px",
                                                                    'z-index': "12"

                                                                    }}></i>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            )
                        }): null
                    }
                    
                    <div class="_3NPrJ">
                        {
                            
                                list && Array.isArray(list) ? list?.slice(1).map(vlist => {
                                    return(
                                        <div class="_26b8q undefined">
                                        <a href={`/videoshow?cmsuid=${vlist?.id}` } class="_1YzI9" clink="y" title="98547012">
                                            <div class="jUU9O _2IaDB " style={{"padding-right":"0px;margin:0px"}}>
                                                <div class="_2g6Ty">
                                                    <p>{vlist?.Title}</p>
                                                </div>
                                                <div class="_1-aOp">
                                                    <img src={vlist?.thumb} data-src="https://static.tnn.in/thumb/msid-98547012,updatedat-1678455364099,width-200,height-200,resizemode-75/98547012.jpg" style={{"animation-name": "gracefulimage", "animation-duration": "0.3s", "animation-iteration-count": 1, "animation-timing-function": "ease-in;"}} alt="Gehlot Ignores Pulwama Widows Reaches Out To Cow Smugglers CMs Double Standards Spark Outrage" title="" pinger-seen="true" />
                                                        <div class="_2N1Fj">
                                                            <div class="_2N1Fj">
                                                                <svg class="icon-md">
                                                                    <use xlinkHref="/assets/icons/svg/sprite-global.svg#video-player"></use>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="_3pRU0 undefined _2h5tT time-icon" style={{
                                                            bottom:"42px",
                                                            fontSize: ".75rem",
                                                            right: "-8px"
                                                        }}>
                                                            <i class="fa fa-play-circle-o" 

                                                                    style={{"font-size":"48px",color:"red",
                                                                    fontSize: "30px",
                                                                    color: "red",
                                                                    position: "absolute",
                                                                    top: "12%",
                                                                    right: "13px",
                                                                    'z-index': "12"

                                                                    }}></i>
                                                        </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    )
                                }):null
                            
                        }
                        {/* <div class="_26b8q undefined">
                            <a href="/videos/times-now/india/gehlot-ignores-pulwama-widows-reaches-out-to-cow-smugglers-cms-double-standards-spark-outrage-video-98547012" class="_1YzI9" clink="y" title="98547012">
                                <div class="jUU9O _2IaDB " style={{"padding-right":"0px;margin:0px"}}>
                                    <div class="_2g6Ty">
                                        <p>Gehlot Ignores Pulwama Widows, Reaches Out To 'Cow Smugglers'. CM's Double Standards Spark Outrage</p>
                                    </div>
                                    <div class="_1-aOp">
                                        <img src="https://static.tnn.in/thumb/msid-98547012,updatedat-1678455364099,width-200,height-200,resizemode-75/98547012.jpg" data-src="https://static.tnn.in/thumb/msid-98547012,updatedat-1678455364099,width-200,height-200,resizemode-75/98547012.jpg" style={{"animation-name": "gracefulimage", "animation-duration": "0.3s", "animation-iteration-count": 1, "animation-timing-function": "ease-in;"}} alt="Gehlot Ignores Pulwama Widows Reaches Out To Cow Smugglers CMs Double Standards Spark Outrage" title="" pinger-seen="true" />
                                            <div class="_2N1Fj">
                                                <div class="_2N1Fj">
                                                    <svg class="icon-md">
                                                        <use xlinkHref="/assets/icons/svg/sprite-global.svg#video-player"></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="_3pRU0 undefined _2h5tT">05:31</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="_26b8q undefined">
                            <a href="/videos/times-now/shows/k-kavithas-dharna-for-women-bill-dharna-dhamki-to-deflect-dalali-blueprint-video-98546988" class="_1YzI9" clink="y" title="98546988">
                                <div class="jUU9O _2IaDB " style={{ "padding-right":"0px",margin:"0px"}}>
                                    <div class="_2g6Ty">
                                        <p>K Kavitha's Dharna For Women Bill | Dharna Dhamki To Deflect Dalali? | Blueprint</p>
                                    </div>
                                    <div class="_1-aOp">
                                        <img src="https://static.tnn.in/thumb/msid-98546988,updatedat-1678455274983,width-200,height-200,resizemode-75/98546988.jpg" data-src="https://static.tnn.in/thumb/msid-98546988,updatedat-1678455274983,width-200,height-200,resizemode-75/98546988.jpg" style={{"animation-name": "gracefulimage", "animation-duration": "0.3s", "animation-iteration-count": 1, "animation-timing-function": "ease-in;"}} alt="K Kavithas Dharna For Women Bill  Dharna Dhamki To Deflect Dalali  Blueprint" title="" pinger-seen="true" />
                                            <div class="_2N1Fj">
                                                <div class="_2N1Fj">
                                                    <svg class="icon-md">
                                                        <use xlinkHref="/assets/icons/svg/sprite-global.svg#video-player"></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="_3pRU0 undefined _2h5tT">16:09</div>
                                    </div>
                                </div>
                            </a>
                        </div> */}
                    </div>
                </section>
            </div>
            <LoadMore />
            <div class=""></div>
            <div class="oBcDZ" id="btf1">
                <div style={{"visibility":"visible"}} class="_2Mjds  bggrayAd ">
                    <div style={{"padding":"8px"}} id="div-u-id-1-2-C50AIB0YZI4" class="dfp _2uYyE _3nL4l _1Sv1C _2CGkz" data-adunit="/21806551354/TN_English/Mweb/ArticleList/TN_English_Mweb_AL_1_300" data-dimensions="[[1,1],[336,280],[300,250],[250,250]]" data-section="videos" data-pagetype="video_listing" platform="mweb"></div>
                </div>
            </div>
        </section>
    )
}

export default VideoList;