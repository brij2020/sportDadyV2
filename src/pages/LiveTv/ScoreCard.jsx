import dayjs from 'dayjs';
import * as React from 'react';

const ScoreCard = (props) => {
    const { matchHead,
    miniScore } = props;
    let lastoverAr =  miniScore?.curOvsStats?.split('|')?.pop().split(' ')
    if(Array.isArray(lastoverAr)) {
        lastoverAr = lastoverAr?.slice(-( lastoverAr.length - 1))
    }
    
    return (<>
        <div class="fixture-card-main col-lg-3 col-md-6 col-sm-12 ng-scope" ng-repeat="(fixtureKey,list) in fixLiveList | orderBy:'timestamp' | limitTo:matchesListLimit" ng-if="list.MatchStatus == 'UpComing' || list.MatchStatus == 'Live'">

            <div class="fixture-card fixture-result-card ng-scope border-green" ng-if="list.MatchStatus == 'Live'" ng-class="{'match-card-multiday' : (list.CurrentInnings > 2),'border-green' : list.MatchTypeName == 'Test','border-orange':(list.MatchTypeName=='T20'),'border-sky':list.MatchTypeName == 'ODI'}">
                <div class="fixture-card-top">

                    <h5 class="fix-text"><span class="ng-binding">{matchHead?.seriesName}</span></h5>
                    <div class="match-top-info d-flex align-items-center justify-content-between">
                        <div class="match-card-left match-schedule">
                            <h5 class="ng-binding">{matchHead?.state}<br  />
                            {/* <span style={{ "display": "none;" }}>Monday</span> */}
                            </h5>
                        </div>
                        <div class="match-card-right match-schedule ">
                            <h5 class="text-right">
                                <div class="match-status d-flex align-items-center" style={{ "color": "#FF2100" }}>
                                    <div class="green-dot"></div>
                                    LIVE
                                </div>
                            </h5>
                        </div>
                    </div>
                </div>
                <div class="fixture-card-top match-result">

                </div>
                <div class="fixture-card-top match-result " >

                    <h5 class="fix-text live-mini" >
                        {
                            matchHead?.status
                        }
                <span class="ng-binding live-mini" style={{display: 'none'}}>
                    <div class="endOverInfo last-over">
                        <p class="firstChild ">Last Over</p>
                        <p class="secondChild">
                            {
                                lastoverAr?.map( ball => {
                                    return(
                                        <i key={ dayjs()?.date + ball } ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="5.6">{ball}</i>
                                    )
                                })
                            }
                            {/* <i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="5.6">0</i>
                            <i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="5.5">0</i>
                            <i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="5.4">1</i>
                            <i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="5.3">0</i>
                            <i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="5.2">0</i>
                            <i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="5.1">0</i> */}
                        </p>
                        {/* <p class="totRun alignR fr" ng-if="IsMatchEnd == 0">{{list[0].TotalRuns}}/{{list[0].TotalWickets}}</p> */} {/* <p class="totRun alignR fr" ng-if="list[list.length - 1].BallID != ''">{{list[list.length - 1].TotalRuns}}/{{list[list.length - 1].TotalWickets}}</p> */} {/* ngIf: list[0].BallID != '' */}
                        {/* <p class="totRun alignR fr ng-binding ng-scope" ng-if="list[0].BallID != ''">3/0</p> */}
                        {/* end ngIf: list[0].BallID != '' */} {/* ngIf: list[0].BallID == '' */} 
                    </div>  
                    </span></h5>
                </div>
                <div class="fixture-card-mid fixture-result-card-mid d-flex justify-content-between">
                    <div class="match-country-info">
                        <div class="match-img-bg ng-scope" ng-if="isNotNull(list.MatchHomeTeamLogo)">
                            <div class="match-coutnry-img ">
                                <img  onerror="this.src = basePath+'images/default-team-logo.png';" alt="India" class="igm-fluid" 
                                src={matchHead?.teamDetails?.batTeamThumb} /></div>
                        </div>
                        <h5 class="country-name ng-binding ng-scope" ng-if="list.HomeTeamName != undefined &amp;&amp; list.HomeTeamName != ''">{matchHead?.teamDetails?.batTeamName}</h5>

                        <div class="match-score ng-scope" ng-if="list.CurrentInnings != undefined &amp;&amp; list.CurrentInnings != '' &amp;&amp; checkMatchResult(list) &amp;&amp; list.HomeTeamID == list.SecondBattingTeamID">

                            <h4 ng-if="list['2FallWickets'] != 10" class="ng-binding ng-scope">
                            {
                                        miniScore?.inningsScores?.[0]?.inningsScore?.[0]?.runs}/{miniScore?.inningsScores?.[0]?.inningsScore?.[0]?.wickets}
                                <span ng-if="list['2FallOvers'] != undefined &amp;&amp; list['2FallOvers'] != ''" class="ng-binding ng-scope">     
                                   &nbsp; ({(miniScore?.inningsScores?.[0]?.inningsScore?.[0]?.overs)
                                    })
                                </span>
                            </h4>

                        </div>
                    </div>
                    <div class="small-seprator">vs</div>
                    {/* <!--<div class="small-seprator inn-1" ng-if="(list.MatchType != 'T20' && list.MatchType != 'One Day' && list.CurrentInnings > 2)">Inn 1</div><div class="small-seprator inn-2" ng-if="(list.MatchType != 'T20' && list.MatchType != 'One Day' && list.CurrentInnings > 2)">Inn 2</div> --> */}
                    <div class="match-country-info">
                        <div class="match-img-bg">

                            <div class="match-coutnry-img ng-scope" ng-if="isNotNull(list.MatchAwayTeamLogo)">
                                <img  onerror="this.src = basePath+'images/default-team-logo.png';" alt="Australia" class="igm-fluid" 
                                src={matchHead?.teamDetails?.bowlTeamThumb}  /></div>

                        </div>

                        <h5 class="country-name ng-binding ng-scope" ng-if="list.AwayTeamName != undefined &amp;&amp; list.AwayTeamName != ''">{matchHead?.teamDetails?.bowlTeamName}</h5>

                        {/* <!--<div class="match-score" ng-if="list.CurrentInnings == undefined || list.CurrentInnings == ''"><h4>{{list['SecondBattingSummary']}}</h4></div>--> */}

                        <div class="match-score ng-scope" ng-if="list.CurrentInnings != undefined &amp;&amp; list.CurrentInnings != '' &amp;&amp; (list.AwayTeamID == list.FirstBattingTeamID)">

                            <h4 ng-if="list['1FallWickets'] == 10" class="ng-binding ng-scope">
                            {miniScore?.inningsScores?.[0]?.inningsScore?.[1]?.runs}/{miniScore?.inningsScores?.[0]?.inningsScore?.[1]?.wickets}
                           
                            <span class="ng-binding">
                            
                                 &nbsp; ({(miniScore?.inningsScores?.[0]?.inningsScore?.[1]?.overs)})
                            
                            </span></h4>

                        </div>

                    </div>
                </div>
                <div class="fixture-card-bottom">

                    <div class="fix-place ng-binding ng-scope" ng-if="widgettype == 'international'" style={{ display:'none'}}>
                        <span class="matchOrderText ng-binding ng-scope" ng-if="list.MatchOrder != undefined &amp;&amp; list.MatchOrder != ''">4th  Test - </span>
                        <span ng-if="list.GroundName != undefined &amp;&amp; list.GroundName != ''" class="ng-binding ng-scope">Narendra Modi Stadium,</span>
                    </div>
                </div>
            </div>

        </div>
    </>)
}
export default ScoreCard;